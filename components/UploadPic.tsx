"use client";
import { useRef, useState } from "react";
import { Image as ImageIcon } from "lucide-react";

const UploadPic = ({
  onFileSelect,
}: {
  onFileSelect: (file: File | null) => void;
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null); // State to hold the image URL

  const handleUploadClick = () => {
    fileInputRef.current?.click(); // Trigger the file input click
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null; // Get the selected file
    if (selectedFile) {
      onFileSelect(selectedFile); // Call the parent function to handle the file
      const url = URL.createObjectURL(selectedFile); // Create a URL for the selected file
      setImageUrl(url); // Update the state with the image URL
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
      <p className="flex-[.35] text-gray text-h-normal font-not-bold">
        Profile picture
      </p>
      <div
        className="md:flex-[.3] w-[193px] h-[193px] flex flex-col justify-center items-center gap-2 bg-purple-lightest rounded-[0.75rem] mb-2 cursor-pointer"
        onClick={handleUploadClick} // Add onClick to the upload area
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Uploaded"
            className="w-full h-full object-cover rounded-[0.75rem]"
          />
        ) : (
          <>
            <ImageIcon width={40} height={40} className="text-purple" />
            <p className="text-purple text-h-normal font-bold">
              + Upload Image
            </p>
          </>
        )}
      </div>
      <input
        type="file"
        accept="image/png, image/jpeg"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden" // Hide the file input
      />
      <p className="flex-[.35] text-gray text-b-s font-not-bold">
        Image must be below 1024x1024px. Use PNG or JPG format.
      </p>
    </div>
  );
};

export default UploadPic;
