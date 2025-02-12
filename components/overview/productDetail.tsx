import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableCellName } from '../form/style';
import { Typography } from '@mui/material';

interface ProductDetailProps {
    product: {
        name: string;
        efficiency: string;
        warranty_years: string;
    };
}

const ProductDetailView: React.FC<ProductDetailProps> = ({ product }) => {

    if (product === null) {
        return (
            <Typography variant="h6" color="error" align="center">
                No product details available
            </Typography>
        );
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCellName>Model</TableCellName>
                        <TableCellName sx={{ fontWeight: 'bold', color: '#257FE6' }}>{product.name}</TableCellName>
                    </TableRow>

                    <TableRow>
                        <TableCellName>Efficiency &#37;</TableCellName>
                        <TableCellName sx={{ fontWeight: 'bold', color: '#257FE6' }}>{product.efficiency}</TableCellName>
                    </TableRow>
                    <TableRow>
                        <TableCellName>Warranty (Years)</TableCellName>
                        <TableCellName sx={{ fontWeight: 'bold', color: '#257FE6' }}>{product.warranty_years}</TableCellName>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ProductDetailView;