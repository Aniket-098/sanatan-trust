import { useRef, useState } from "react";
import {
  Upload,
  Loader2,
  Image as ImageIcon,
} from "lucide-react";
import toast from "react-hot-toast";

import { uploadImage } from "../../api/uploadApi";
import { getToken } from "../utils/auth";

const ImageUploader = ({
  label,
  value,
  onUpload,
}) => {
  const inputRef = useRef(null);

  const [uploading, setUploading] =
    useState(false);

  const token = getToken();

  const handleSelect = async (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    try {
      setUploading(true);

      const result = await uploadImage(
        file,
        token
      );

      onUpload(result.imageUrl);

      toast.success(
        "Image uploaded successfully."
      );
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to upload image."
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-slate-300">
        {label}
      </label>

      <div
        className="
          rounded-2xl
          border
          border-dashed
          border-slate-600
          bg-[#111827]
          p-6
        "
      >
        {value ? (
          <img
            src={value}
            alt="Preview"
            className="
              mb-5
              h-48
              w-full
              rounded-xl
              object-contain
            "
          />
        ) : (
          <div
            className="
              mb-5
              flex
              h-48
              items-center
              justify-center
              rounded-xl
              bg-slate-900
            "
          >
            <ImageIcon
              size={60}
              className="text-slate-600"
            />
          </div>
        )}

        <input
          ref={inputRef}
          type="file"
          hidden
          accept="image/*"
          onChange={handleSelect}
        />

        <button
          type="button"
          onClick={() =>
            inputRef.current?.click()
          }
          disabled={uploading}
          className="
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-xl
            bg-amber-500
            px-5
            py-3
            font-semibold
            text-black
            transition
            hover:bg-amber-400
            disabled:opacity-50
          "
        >
          {uploading ? (
            <>
              <Loader2
                size={20}
                className="animate-spin"
              />
              Uploading...
            </>
          ) : (
            <>
              <Upload size={20} />
              Upload Image
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ImageUploader;