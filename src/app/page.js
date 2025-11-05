import FileUpload from "@/components/FileUpload";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen w-screen grid grid-cols-10 gap-4 p-4 font-bold">
        <div className="bg-pink-500 col-span-3 flex items-center justify-center">
          <FileUpload />
        </div>
        <div className="bg-pink-500 col-span-7">2</div>
      </div>
    </div>
  );
}
