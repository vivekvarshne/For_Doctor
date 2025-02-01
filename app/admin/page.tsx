import ImageUpload from "../components/ImageUpload"

export default function Admin() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Admin Dashboard</h1>
      <ImageUpload />
    </div>
  )
}

