import Link from "next/link";

export default function ProductTile({ post: product }) {
  return (
    <div className="border border-slate-400 border-dashed p-4 rounded-md h-full bg-white">
      <p className="text-slate-600 text-xs">
        {product._id.getTimestamp().toLocaleString()}
      </p>
      <Link
        href={`/posts/show/${product._id.toString()}`}
        className="block text-xl font-semibold mb-4"
      >
        {product.title}
      </Link>
      <p className="text-sm">{product.content}</p>
    </div>
  );
}
