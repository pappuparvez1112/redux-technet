import {
  useGetCommentQuery,
  usePostCommentMutation,
} from '@/redux/features/products/productApi';
import { ChangeEvent, FormEvent, useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

// const dummyComments = [
//   'Bhalo na',
//   'Ki shob ghori egula??',
//   'Eta kono product holo ??',
//   '200 taka dibo, hobe ??',
// ];

interface IProps {
  id: string;
}

export default function ProductReview({ id }: IProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const { data } = useGetCommentQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });
  const [postComment, { isLoading, isError, isSuccess }] =
    usePostCommentMutation();

  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const options = {
      id: id,
      data: { comment: inputValue },
    };
    console.log(options);

    postComment(options);
    setInputValue('');
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <form className="flex gap-5 items-center" onSubmit={handleSubmit}>
        <Textarea
          className="min-h-[10px]"
          onChange={handleChange}
          value={inputValue}
        />
        <Button
          type="submit"
          className="rounded-full h-12 w-12 p-2 text-[35px]"
        >
          <FiSend />
        </Button>
      </form>
      <div className="mt-10">
        {data?.comments?.map((comment: string, index: number) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-gray-50"
          >
            <div className="flex items-center pb-5">
              <Avatar className="me-10">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p>{comment}</p>
            </div>
            <div className="flex">
              <Button className="me-5 p-5">Edit</Button>
              <br />
              <Button>Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
