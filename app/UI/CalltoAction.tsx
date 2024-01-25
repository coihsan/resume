import { Icons } from "../constants/Icons";
import CopyButton from "../UI/CopyButton";
import ButtonLink from "../UI/ButtonLink";
export default function CalltoAction() {
  return (
    <div className="flex gap-3 max-[600px]:mx-auto flex-wrap justify-center">
      <ButtonLink
        className="bg-white text-black hover:shadow-white"
        icon={Icons.whatsapp}
        text="Whatsapp"
        url={"https://wa.me/6287773332048"}
        aria-label="Chat on WhatsApp"
      />
      <CopyButton
        className={"pl-[25px] w-[100%]"}
        textButton="E-Mail"
        textCopy="co.ihsan@gmail.com"
        aria-label="Click to Copy E-Mail"
      />
      <ButtonLink
        className="bg-white/10 text-white fill-white hover:bg-white/25"
        icon={Icons.link}
        text="Resume"
        aria-label="Link to Google Drive"
        url={
          "https://drive.google.com/drive/folders/1daKiXh56SeyZbn10-h5kVTA12W8vYAkd?usp=drive_link"
        }
      />
    </div>
  );
}
