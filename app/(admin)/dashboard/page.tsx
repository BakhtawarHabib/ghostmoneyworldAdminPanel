import { BannerUploader } from "@/components/reuseable/uploadbanner";
import { BannerCards } from "@/components/reuseable/section-cards";
export default function Example() {
  return (
    <div className="w-full flex flex-col gap-6 p-4">
      <BannerUploader />
      <BannerCards />
    </div>
  );
}