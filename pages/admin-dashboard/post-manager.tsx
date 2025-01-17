import PostSchedule from "@/components/PostSchedule";
import { PostingProdiver } from "@/shared/context/PostingContext";
import { useTranslation } from "react-i18next";

const PostScheduleManager = () => {
  const { t } = useTranslation("dashboard");

  return (
    <PostingProdiver>
      <PostSchedule {...{ t }} />
    </PostingProdiver>
  );
};
export default PostScheduleManager;
