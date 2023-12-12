async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const sdfsdf = await ethers.deployContract("Lock");

    console.log(sdfsdf)
    console.log("Token address:", await sdfsdf.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });