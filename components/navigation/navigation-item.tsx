"use client";

import { useParams, useRouter } from "next/navigation";
import ActionTooltip from "../action-tooltip";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface NavigationItem {
  id: string;
  imageUrl: string;
  name: string;
}
const NavigationItem = ({ id, imageUrl, name }: NavigationItem) => {
  const router = useRouter();
  const param = useParams();

  const onClick = () => {
    router.push(`/servers/${id}`);
  };
  return (
    <ActionTooltip side="right" align="center" label={name}>
      <button onClick={onClick} className="group relative flex items-center">
        <div
          className={cn(
            "absolute left-0 top-0 bg-primary rounded-r-full transition-all w-[4px]",
            param?.serverId !== id && "group-hover:h-[20px]",
            param?.serverId === id ? "h-[48px]" : "h-[8px]"
          )}
        />
          <div
            className={cn(
              "relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden",
              param?.serverId === id &&
                "bg-primary/10 text-primary rounded-[16px]"
            )}
          >
            <Image fill src={imageUrl} alt="Channel" />
          </div>
      </button>
    </ActionTooltip>
  );
};

export default NavigationItem;
