const Order = require('../models/order.model');

exports.createOrder = async (req, res) => {
    try {
        const { products } = req.body;
        // Get user ID from auth token payload
        const userId = req.user.userId || req.user.id;

        if (!userId || !products || products.length === 0) {
            return res.status(400).json({ 
                message: 'Invalid request data' 
            });
        }

        const orders = await Promise.all(
            products.map(async (product) => {
                try {
                    const order = new Order({
                        user: userId,
                        productId: product.productId,
                        productName: product.productName,
                        quantity: product.quantity,
                        price: product.price,
                        imageUrl: product.imageUrl,
                        status: 'pending'
                    });
                    return await order.save();
                } catch (err) {
                    console.error('Error creating individual order:', err);
                    throw err;
                }
            })
        );

        res.status(201).json({ 
            success: true,
            message: 'Orders created successfully',
            orders 
        });

    } catch (error) {
        console.error('Order creation error details:', error);
        res.status(500).json({ 
            success: false,
            message: 'Error creating orders',
            error: error.message 
        });
    }
};

exports.getOrders = async (req, res) => {
    try {
        const userId = req.user.userId || req.user.id;
        const orders = await Order.find({ user: userId })
            .sort({ createdAt: -1 });

        res.status(200).json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error fetching orders',
            error: error.message 
        });
    }
};
