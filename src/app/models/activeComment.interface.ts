import { ActiveCommentTypeEnum } from "./activeComment.enum";

export interface ActiveCommentInterface {
  id: string;
  type: ActiveCommentTypeEnum;
}