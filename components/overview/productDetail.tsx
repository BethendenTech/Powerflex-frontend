import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface ProductDetailProps {
    product: {
        name: string;
        price_usd: number;
        capacity_w: string;
    };
}

const ProductDetailView: React.FC<ProductDetailProps> = ({ product }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>{product.name}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Price</TableCell>
                        <TableCell>{product.price_usd}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Capacity</TableCell>
                        <TableCell>{product.capacity_w}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ProductDetailView;