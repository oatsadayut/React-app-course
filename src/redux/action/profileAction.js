// export GET_PROFILE เวลาเรียกที่ไฟล์ Reducer จะเป็นแบบนี้ import { GET_PROFILE } form '../action/profileAction'
export const GET_PROFILE = "GET_PROFILE";

//รับ Profile ที่ส่งเข้ามา updaeProfilr(<profile>)
export const updateProfile = (profile) => {
  return {
    type: GET_PROFILE, //type ที่จำนำไปเรียกใน Reducer เพื่อกระจายให้ Component ที่ต้องการ
    payload: {
      profile: profile, //Add Profile ที่ส่งเข้ามาให้กับ ตัวแปร Profile ที่สร้างข้อใหม่
    }
  };
};
