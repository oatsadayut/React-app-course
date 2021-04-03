import React from "react";
import { AiFillGithub } from "react-icons/ai"; //import icon
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useToasts } from 'react-toast-notifications'

const FILE_TYPE = ["image/jpg", "image/jpeg"];
// application/vnd.openxmlformats-officedocument.spreadsheetml.sheet ไฟล์ excel.xlsx
// text/plain ไฟล์ .txt
// application/vnd.ms-excel ไฟล์ excel.xls
// application/pdf ไฟล์ .pdf
// image/jpg ไฟล์ .jpg
// image/jpeg ไฟล์ .jpeg
// image/png ไฟล์ .png

const UploadPage = () => {
  const history = useHistory(); //history Route
  const { addToast } = useToasts(); //Alert Toast

  const { register, handleSubmit, errors ,setValue} = useForm();

  const onSubmit = (data) => {
    try {
      let FileImage = data.file[0]; //เลือกไฟล์ array ที่ 0
      const reader = new FileReader(); //new FileReader
      reader.readAsDataURL(FileImage); //Encode Base64 readAsData File

      //โหลดไฟล์
      reader.onload = async (e) => {
        let fileBase64 = e.target.result; //select file จาก e
        const url = "https://api.codingthailand.com/api/upload";
        const res = await axios.post(url, {
          picture: fileBase64,
        });
        setValue('file',null)
        history.replace('/upload');
        addToast(res.data.data.message, { appearance: 'success' });
      };
    } catch (error) {
        addToast('เกิดปัญหาไม่สามารถอัพโหลดได้', { appearance: 'error' });
    }
  };

  return (
    <>
      <div className="jumbotron">
        <div className="container">
          <span>
            <AiFillGithub size="2rem" /> {"  "}{" "}
            <a href="https://github.com/oatsadayut/React-app-course">
              https://github.com/oatsadayut/React-app-course
            </a>{" "}
          </span>
          <h1 className="display-3">อัพโหลด Page</h1>
        </div>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="exampleFormControlFile1">File input</label>
            <input
              type="file"
              name="file"
              className="form-control-file"
              id="exampleFormControlFile1"
              ref={register({
                required: "กรุณาเลือกไฟล์",
                validate: {
                  checkFileType: (value) => {
                    return value && FILE_TYPE.includes(value[0].type);
                  },
                },
              })}
            />
            {errors.file && errors.file.type === "required" && (
              <div className=" text-danger">{errors.file.message}</div>
            )}

            {errors.file && errors.file.type === "checkFileType" && (
              <div className=" text-danger">นามสกุลไฟล์ไม่ถูกต้อง</div>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            UPLOAD
          </button>
        </form>
      </div>
    </>
  );
};

export default UploadPage;
