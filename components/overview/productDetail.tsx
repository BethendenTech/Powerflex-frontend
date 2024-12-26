import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface ProductDetailProps {
    product: {
        model_name: string;
        efficiency: string;
        warranty_years: string;
    };
}

const ProductDetailView: React.FC<ProductDetailProps> = ({ product }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>Model</TableCell>
                        <TableCell>{product.model_name}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Efficiency</TableCell>
                        <TableCell>{product.efficiency}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Warranty</TableCell>
                        <TableCell>{product.warranty_years}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ProductDetailView;