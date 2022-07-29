import { useDispatch, useSelector } from "react-redux";
import { IconButton, Typography } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";
import { NoteView, NothingSelectedview } from "../../view";
import { JournalLayout } from "../layout/JournalLayout";
import { startNewNote } from "../../store/journal/thunks";

export const JournalPage = () => {
  const { isSaving, active } = useSelector((state) => state.journal);
  const dispatch = useDispatch();

  const onclickNewNote = () => {
    dispatch(startNewNote());
  };
  return (
    <JournalLayout>
      {!!active ? <NoteView /> : <NothingSelectedview />}

      <IconButton
        disabled={isSaving}
        onClick={onclickNewNote}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }}></AddOutlined>
      </IconButton>
    </JournalLayout>
  );
};
