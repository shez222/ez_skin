import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Image from "next/image";
import HistoryIMG from "@/assets/images/history.png";
import MoneyImg from "@/assets/images/money-bag.png";
import InventoryPage from "@/pages/inventory";
import axios from "axios";
import { Socket } from "dgram";

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

interface InventoryItem {
  iconUrl: string;
  name: string;
  price: string;
  owner: string;
  _id: string;
}

export default function InventoryModal() {
  const [open, setOpen] = React.useState(false);
  const [selectedItems, setSelectedItems] = React.useState<InventoryItem[]>([]);
  // const router = useRouter();
  const SOCKET_SERVER_URL =
    process.env.NEXT_PUBLIC_SOCKET_SERVER_URL || "http://localhost:5000";

  const handleOpen = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent event propagation
    setOpen(true);
  };

  const handleClose = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent event propagation
    setSelectedItems([]); // Clear the selected items
    setOpen(false);
  };

  const handleModalContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const handleItemSelection = (item: InventoryItem) => {
    if (selectedItems.length < 20) {
      setSelectedItems((prevItems) => [...prevItems, item]);
    }
  };

  const handleJackpotDeposit = async () => {
    try {
      const transformedItems = selectedItems.map((item) => item._id);
      const userId = selectedItems[0].owner;
      const response = await axios.post(
        `${SOCKET_SERVER_URL}/jackpotSystem/join`,
        { itemIds: transformedItems, userId: userId },
      );
    } catch (error: any) {
      console.error(
        "Jackpot Deposit Error:",
        error.response ? error.response.data : error.message,
      );
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <div className="flex items-center gap-x-2 font-normal text-white font-[Poppins] tracking-tight text-base bg-green-600 p-2 rounded-md hover:-translate-y-1 transition">
          <Image src={MoneyImg} alt="" className="w-7 h-7" />
          Deposit
        </div>
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
            height: "90%",
            width: "90%",
            borderRadius: 4,
            position: "relative", // Make sure the close button is positioned relative to the Box
          }}
          onClick={handleModalContentClick}
        >
          <Button
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "white",
              fontSize: "1.5rem",
              minWidth: "unset",
              padding: "0",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            &times;
          </Button>
          <div className="h-full w-full flex mx-auto">
            <div className="w-full grid grid-cols-4 items-center gap-x-5">
              <div className="col-span-1 h-[80%] border border-white rounded-md">
                <div className="h-10 bg-white rounded-t-md text-center flex justify-center items-center">
                  Rewards
                </div>
                <div className="h-[90%] flex flex-col justify-between items-center">
                  <div className="flex flex-col gap-y-3 text-center text-white py-2">
                    <h1 className="text-xl font-semibold my-2">
                      Available Grub Bucks $0.00
                    </h1>
                    <p className="text-lg font-normal">Selected $0.00</p>
                  </div>
                  <div className="mt-3 overflow-y-auto  w-full p-3">
                    <ul className="max-h-[270px] overflow-y-auto">
                      {selectedItems.map((item, index) => (
                        <li
                          key={item._id}
                          className="flex items-center gap-x-2"
                        >
                          <span className="text-green-1000 mr-1 ml-2">
                            {index + 1}.
                          </span>
                          <img
                            src={item.iconUrl}
                            alt={item.name}
                            className="w-10 h-10"
                          />
                          <span className="text-white">{item.name}</span>
                          <span className="text-green-700">{item.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <button
                      className="w-96 h-10 flex justify-center items-center bg-white rounded-md font-medium"
                      onClick={handleJackpotDeposit}
                    >
                      Jackpot Deposit
                    </button>
                    <button className="w-96 h-10 flex justify-center items-center bg-white rounded-md font-medium">
                      Create Coinflip
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-span-3 h-[80%] border border-white rounded-md">
                <div className="h-10 bg-white rounded-t-md text-center flex justify-center items-center">
                  Shop
                </div>
                <div className="mt-3 h-10 text-center flex justify-center items-center gap-x-2">
                  <Image
                    src={HistoryIMG}
                    alt="History Png"
                    className="w-6 h-6"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width={25}
                    height={25}
                    viewBox="0 0 50 50"
                    fill="white"
                  >
                    <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z" />
                  </svg>
                  <input
                    type="search"
                    className="w-[70%] p-2 focus:border focus:border-blue-500 focus:outline-none bg-[#3D3A40] text-white"
                    placeholder="Search Inventory"
                  />
                </div>
                <InventoryPage
                  onSelectItem={handleItemSelection}
                  rewardLimitReached={selectedItems.length >= 20}
                />
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
