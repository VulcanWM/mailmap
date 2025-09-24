import dbConnect from './mongodb';
import Newsletter from '../models/Newsletter'

export async function get_newsletters() {
    await dbConnect();
    const newsletters = await Newsletter.find();
    return newsletters
}