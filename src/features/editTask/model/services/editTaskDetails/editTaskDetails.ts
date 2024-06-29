import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {getTaskEditForm} from "../../../model/selectors/getTaskEditData/getTaskEditData";
import {ManageTask} from "entities/Task";

export const editTaskDetails = createAsyncThunk<
    ManageTask,
    void,
    ThunkConfig<string>
>(
    'editTaskDetails',
    async (_, thunkAPI) => {
        const {extra, rejectWithValue, getState } = thunkAPI;

        const formData = getTaskEditForm(getState());
        // const errors = validateProfileData(formData);
        //
        // if(errors.length) {
        //     return rejectWithValue(errors)
        // }
        console.log(formData?._id)

        try {
            const response = await extra.api.put<ManageTask>(`/tasks/edit/${formData?._id}`, formData);


            return response.data;
        } catch (e) {
            console.log(e);
            // return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
            return rejectWithValue('error')
        }
    },
);