"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [uploadStatus, setUploadStatus] = useState<string | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files) {
      return
    }
    const file = files[0]
    if (file && file.type.substr(0, 5) === "image") {
      setSelectedFile(file)
      setPreviewUrl(URL.createObjectURL(file))
    } else {
      setSelectedFile(null)
      setPreviewUrl(null)
    }
  }

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus("Please select an image to upload.")
      return
    }

    const formData = new FormData()
    formData.append("image", selectedFile)

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        setUploadStatus("Image uploaded successfully!")
        setSelectedFile(null)
        setPreviewUrl(null)
      } else {
        setUploadStatus("Failed to upload image. Please try again.")
      }
    } catch (error) {
      console.error("Error uploading image:", error)
      setUploadStatus("An error occurred while uploading the image.")
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Upload Image</h2>
      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-primary-50 file:text-primary-700
            hover:file:bg-primary-100"
        />
      </div>
      {previewUrl && (
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="mb-4">
          <img
            src={previewUrl || "/placeholder.svg"}
            alt="Preview"
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </motion.div>
      )}
      <button
        onClick={handleUpload}
        className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
        disabled={!selectedFile}
      >
        Upload Image
      </button>
      {uploadStatus && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-4 ${uploadStatus.includes("successfully") ? "text-green-600" : "text-red-600"}`}
        >
          {uploadStatus}
        </motion.p>
      )}
    </div>
  )
}

