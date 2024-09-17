import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import ModalSelect from "./select";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#3D3A40",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent event propagation
    setOpen(true);
  };
  const handleClose = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent event propagation
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Live Gaming</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function TradeURLModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent event propagation
    setOpen(true);
  };
  const handleClose = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent event propagation
    setOpen(false);
  };

  const handleModalContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <p className="font-[Poppins] -ml-2 text-base font-light text-left text-black">
          Setting
        </p>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            ...style,
            height: 250,
            width: 400,
            borderRadius: 4,
            textAlign: "center",
            paddingTop: "50px",
          }}
          onClick={handleModalContentClick}
        >
          <h2
            id="parent-modal-title"
            className="text-4xl font-bold text-center capitalize mb-4 text-white"
          >
            Trade URL
          </h2>
          <a
            href="https://steamcommunity.com/my/tradeoffers/privacy#trade_offer_access_url"
            target="_blank"
            className="text-white"
          >
            Your Trade URL <span className="text-blue-500">here!</span>
          </a>
          <div className="flex gap-x-0 mt-1">
            <input
              type="text"
              name=""
              id=""
              className="border-r-0 rounded-r-none w-full p-2 bg-slate-100 rounded-lg border border-gray-700 font-normal focus:outline-none"
              placeholder="Enter Your Trade Url Here"
            />
            <button className="rounded-l-none px-2 rounded-lg bg-blue-500 hover:bg-blue-700 transition text-sm text-white font-medium">
              Save
            </button>
          </div>
          <div
            className="absolute top-0 right-0 p-4 cursor-pointer ease-out hover:scale-y-150  duration-300"
            onClick={handleClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width={20}
              height={20}
              viewBox="0 0 50 50"
              fill="white"
              className="hover:fill-red-700"
            >
              <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
            </svg>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
