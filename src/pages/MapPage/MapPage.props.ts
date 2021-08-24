import { Category } from "../../utils/items";

export interface MapPageProps {
  /**
   * The item category
   */
  location: { state: { category: Category } };
}
