import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { IconButton } from "@mui/material";

export default function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <div>
      <IconButton 
      onClick={() => setLike(like+ 1)}
      color="primary"
      >
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>
      <IconButton 
      onClick={() => setDisLike(dislike+ 1)}
      color="error"
      >
        <Badge badgeContent={dislike} color="error">
        👎
        </Badge>
      </IconButton>
    </div>
  );
}
