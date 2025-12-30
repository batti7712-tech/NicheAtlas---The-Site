
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import Button from '../../components/ui/Button';

const ShopManagerPage: React.FC = () => {
  const { products, deleteProduct } = useAppContext();

  return (
    <div className="space-y-6">
        <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-slate-gray-900">Shop Manager</h1>
            <Link to="/admin/shop/editor">
                <Button>Add New Product</Button>
            </Link>
        </div>
      
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-slate-gray-200">
                <thead className="bg-slate-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-gray-500 uppercase tracking-wider">Title</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-gray-500 uppercase tracking-wider">Type</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-gray-500 uppercase tracking-wider">Price</th>
                        <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Actions</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-gray-200">
                    {products.map((product) => (
                        <tr key={product.slug}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-slate-gray-900">{product.title}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-slate-gray-100 text-slate-gray-800">
                                    {product.type}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-gray-600">
                                {(!product.price || product.price === 0) ? 'Free' : `$${product.price.toFixed(2)}`}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-4">
                                <a href={product.downloadUrl} target="_blank" rel="noopener noreferrer" className="text-slate-gray-600 hover:text-slate-gray-900">View</a>
                                <Link to={`/admin/shop/editor/${product.slug}`} className="text-accent-teal-600 hover:text-accent-teal-900">Edit</Link>
                                <button onClick={() => deleteProduct(product.slug)} className="text-red-600 hover:text-red-900">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default ShopManagerPage;
