
const addresses = require("./input.json")
const ethers = require("ethers")

addresses.forEach((address) => {
    console.log(ethers.utils.getAddress(address))
})