import ImageKit from 'imagekit';

var imagekit = new ImageKit({
    publicKey : process.env.imagekit_public_key,
    privateKey : process.env.imagekit_private_key,
    urlEndpoint : process.env.imagekit_url_endpoint
});

export default imagekit;

// imagekit mai upload karte hai to optimize storage and faster delivery of imgs 
// Server storage jaldi fill ho jayega agar hum directly server pe store karenge
// ImageKit ek cloud-based image management service hai jo images ko optimize, store, aur deliver karne ke liye use hoti hai.

