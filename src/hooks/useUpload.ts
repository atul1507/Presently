"use client";

import { useReducer } from "react";

import { validateFile } from "@/lib/validation";
import {
  initialUploadState,
  uploadReducer,
} from "@/reducers/uploadReducer";

export function useUpload() {
  const [state, dispatch] = useReducer(
    uploadReducer,
    initialUploadState
  );

  function selectFile(file: File) {
    const error = validateFile(file);

    if (error) {
      dispatch({
        type: "SET_ERROR",
        payload: error,
      });

      return;
    }

    dispatch({
      type: "SELECT_FILE",
      payload: file,
    });
  }

  function removeFile() {
    dispatch({
      type: "REMOVE_FILE",
    });
  }

  function setDragging(value: boolean) {
    dispatch({
      type: "SET_DRAGGING",
      payload: value,
    });
  }

  async function upload() {
    if (!state.file) return;

    dispatch({
      type: "SET_UPLOADING",
    });

    /**
     * API will come here
     */

    dispatch({
      type: "SET_PROCESSING",
    });
  }

  return {
    state,

    selectFile,

    removeFile,

    upload,

    setDragging,
  };
}