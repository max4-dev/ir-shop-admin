import { ChangeEvent } from "react";
import { Button } from "@mui/material";

import axiosInstance from "../../../../core/axios";
import { URL_CONSTANTS } from "../../../../providers";
import { API_URL } from "../../api/const/ApiUrl";

import { UploaderProps } from "./Uploader.props";
import styles from "./Uploader.module.scss";

export const Uploader = ({ setImages }: UploaderProps) => {
  const createProductFormData = (file: File) => {
    const formData = new FormData();
    if (file) {
      formData.append("files", file);
    }

    return formData;
  };

  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return null;
    }
    const formData = createProductFormData(e.target.files[0]);
    const image = await axiosInstance({
      method: "post",
      url: `${API_URL}/${URL_CONSTANTS.uploadFile}?folder=images`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    return setImages((prevState: string[]) => {
      prevState.push(image.data.urls.webP);
      return prevState;
    });
  };

  return (
    <Button
      className={styles.uploader}
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
    >
      Загрузить фото
      <input className={styles.input} type="file" onChange={handleUpload} />
    </Button>
  );
};
