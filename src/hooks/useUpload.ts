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

    try {
      dispatch({
        type: "SET_UPLOADING",
      });

      const formData = new FormData();
      formData.append("file", state.file);

      const response = await fetch("/api/presentations/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data = await response.json();

      console.log(data);

      window.location.href = `/session/${data.sessionId}`;

      // Next step:
      // redirect to session page
    } catch (error) {
      console.error(error);

      dispatch({
        type: "SET_ERROR",
        payload: "Upload failed.",
      });
    }
  }

  return {
    state,

    selectFile,

    removeFile,

    upload,

    setDragging,
  };
}