const Order = require('../models/order.model');
const User = require('../models/user.model');

exports.createOrder = async (req, res) => {
    try {
        const { products, address, userEmail } = req.body;
        
        // Find user by email
        const user = await User.findOne({ email: userEmail });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const orders = [];
        
        // Create separate order for each product
        for (const product of products) {
            const newOrder = new Order({
                userId: user._id,
                productId: product.productId,
                quantity: product.quantity,
                address: address
            });
            
            const savedOrder = await newOrder.save();
            orders.push(savedOrder);
        }

        res.status(201).json({ 
            message: 'Orders created successfully',
            orders: orders 
        });

    } catch (error) {
        res.status(500).json({ 
            message: 'Error creating orders',
            error: error.message 
        });
    }
};
