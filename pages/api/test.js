import dbConnect from '../../utils/dbConnect';

dbConnect();

export default (req, res) => {
  res.json({ name: 'Joey Leger' });
};
