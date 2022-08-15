import * as React from "react";
import type { NextPage } from "next";
import { Home as HomeTemplate } from "../components/template";
import { ethers } from "ethers";
import keccak256 from "keccak256";
import abi from "../config/abi.json";
import { contractAddress } from "../config";

const Home: NextPage = () => {
  return <HomeTemplate />;
};

export default Home;
