import { BannerUploader } from "@/components/reuseable/uploadbanner";
import { BannerCards } from "@/components/reuseable/section-cards";
export default function Example() {
  return (
    <div className="w-full py-6 px-4 flex flex-col gap-6">
      <BannerUploader />
      <BannerCards />
    </div>
  );
}
