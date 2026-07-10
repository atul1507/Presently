import { UploadState, UploadStatus } from "@/types/upload";

export type UploadAction =
  | { type: "SET_DRAGGING"; payload: boolean }
  | { type: "SELECT_FILE"; payload: File }
  | { type: "REMOVE_FILE" }
  | { type: "SET_UPLOADING" }
  | { type: "SET_PROCESSING" }
  | { type: "SET_PROGRESS"; payload: number }
  | { type: "SET_SUCCESS" }
  | { type: "SET_ERROR"; payload: string }
  | { type: "RESET" };

export const initialUploadState: UploadState = {
  file: null,
  status: "idle",
  progress: 0,
  error: null,
};

export function uploadReducer(
  state: UploadState,
  action: UploadAction
): UploadState {
  switch (action.type) {
    case "SET_DRAGGING":
      return {
        ...state,
        status: action.payload ? "dragging" : state.file ? "selected" : "idle",
      };

    case "SELECT_FILE":
      return {
        file: action.payload,
        status: "selected",
        progress: 0,
        error: null,
      };

    case "REMOVE_FILE":
      return initialUploadState;

    case "SET_UPLOADING":
      return {
        ...state,
        status: "uploading",
        progress: 0,
      };

    case "SET_PROCESSING":
      return {
        ...state,
        status: "processing",
      };

    case "SET_PROGRESS":
      return {
        ...state,
        progress: action.payload,
      };

    case "SET_SUCCESS":
      return {
        ...state,
        status: "success",
        progress: 100,
      };

    case "SET_ERROR":
      return {
        ...state,
        status: "error",
        error: action.payload,
      };

    case "RESET":
      return initialUploadState;

    default:
      return state;
  }
}