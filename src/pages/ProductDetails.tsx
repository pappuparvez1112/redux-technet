import ProductReview from '@/components/ProductReview';
import { Button } from '@/components/ui/button';
import { useSingleProductQuery } from '@/redux/features/products/productApi';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();
  const { data: product, isLoading, error } = useSingleProductQuery(id);
  //! Temporary code, should be replaced with redux
  // const [data, setData] = useState<IProduct[]>([]);
  // useEffect(() => {
  //   fetch('../../public/data.json')
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  // const product = data?.find((item) => item._id === Number(id));

  //! Temporary code ends here

  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center  m-5">
        <div className="w-[50%]">
          <img className="w-[50%]" src={product?.image} alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{product?.name}</h1>
          <p className="text-xl">Rating: {product?.rating}</p>
          <ul className="space-y-1 text-lg">
            {product?.features?.map((feature: string) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <div className="flex">
            <Button className="me-5 p-5">Edit</Button>
            <br />
            <Button>Delete</Button>
          </div>
        </div>
      </div>
      <ProductReview id={id!} />
    </>
  );
}
