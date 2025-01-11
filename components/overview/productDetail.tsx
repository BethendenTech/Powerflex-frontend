import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableCellName } from '../form/style';

interface ProductDetailProps {
    product: {
        name: string;
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