import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../configs/firebase";

export const getUserByUsername = async (userName: string) => {
  try {
    const docRef = doc(db, "users", userName);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
  } catch (error: any) {
    return error;
  }
};

export const getUserDetails = createAsyncThunk(
  "user/user-details",
  async (userName: string) => {
    try {
      return await getUserByUsername(userName);
    } catch (error) {
      console.log(error);
    }
  }
);
