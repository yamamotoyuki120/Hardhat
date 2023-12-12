async function main() {
    const [deployer] = await ethers.getSigners();
  
    // Replace 'LockAddress' with the actual address of your deployed Lock contract
    const lockAddress = '0x324C064da435B016c9145f5401E876c8b8F03Fee';

    const Lock = await ethers.getContractFactory("Lock");
    const lock = await Lock.attach(lockAddress);
  
    console.log("Connected to Lock contract at address:", lock.address);
    console.log("Current hello value:", await lock.returnHello());
  
    // Change the hello variable
    // const newName = "New Hello World";
    // await lock.changeHello(newName);
    // console.log("Hello value after change:", await lock.returnHello());
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
