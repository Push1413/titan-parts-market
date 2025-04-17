
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StarIcon, ThumbsUp, ThumbsDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Review {
  id: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  user: {
    name: string;
    avatar?: string;
    isVerifiedBuyer: boolean;
  };
  helpfulCount: number;
  notHelpfulCount: number;
}

interface ProductReviewsProps {
  productId: string;
}

export function ProductReviews({ productId }: ProductReviewsProps) {
  const [showReviewForm, setShowReviewForm] = useState(false);

  // Sample reviews data
  const reviews: Review[] = [
    {
      id: "1",
      rating: 5,
      title: "Excellent quality and fast shipping",
      content: "I've been using this component for my robotics project and it works flawlessly. The build quality is impressive and it integrated perfectly with my existing setup. Would definitely purchase again from this seller.",
      date: "2025-03-15",
      user: {
        name: "Michael Johnson",
        avatar: undefined,
        isVerifiedBuyer: true,
      },
      helpfulCount: 12,
      notHelpfulCount: 1,
    },
    {
      id: "2",
      rating: 4,
      title: "Great product, minor packaging issues",
      content: "The product itself is great and works as advertised. My only complaint is that the packaging was a bit damaged when it arrived, but the component itself was well protected and undamaged. Fast shipping and good communication from the seller.",
      date: "2025-03-01",
      user: {
        name: "Samantha Lee",
        avatar: undefined,
        isVerifiedBuyer: true,
      },
      helpfulCount: 8,
      notHelpfulCount: 0,
    },
    {
      id: "3",
      rating: 3,
      title: "Works but missing documentation",
      content: "The component works fine for my needs, but I was expecting better documentation on how to use it. I had to search online for tutorials. Otherwise, the quality is decent and the price is reasonable.",
      date: "2025-02-22",
      user: {
        name: "David Williams",
        avatar: undefined,
        isVerifiedBuyer: false,
      },
      helpfulCount: 5,
      notHelpfulCount: 2,
    },
  ];

  // Calculate average rating
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  
  // Count ratings
  const ratingCounts = Array(5).fill(0);
  reviews.forEach((review) => {
    ratingCounts[review.rating - 1]++;
  });

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="md:w-1/3">
          <h3 className="text-2xl font-bold mb-2">Customer Reviews</h3>
          <div className="flex items-center mb-4">
            <div className="flex items-center mr-2">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(averageRating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-lg font-bold">{averageRating.toFixed(1)}</span>
            <span className="text-sm text-muted-foreground ml-2">
              ({reviews.length} reviews)
            </span>
          </div>

          {/* Rating breakdown */}
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center">
                <div className="w-12 text-sm">{rating} stars</div>
                <div className="flex-1 mx-2 h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full bg-yellow-500"
                    style={{
                      width: `${(ratingCounts[rating - 1] / reviews.length) * 100}%`,
                    }}
                  ></div>
                </div>
                <div className="w-8 text-sm text-muted-foreground">
                  {ratingCounts[rating - 1]}
                </div>
              </div>
            ))}
          </div>

          <Button 
            className="mt-6 w-full" 
            onClick={() => setShowReviewForm(!showReviewForm)}
          >
            Write a Review
          </Button>
        </div>

        <div className="md:w-2/3">
          {showReviewForm && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Write Your Review</CardTitle>
                <CardDescription>
                  Share your experience with this product
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Rating
                  </label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 stars - Excellent</SelectItem>
                      <SelectItem value="4">4 stars - Good</SelectItem>
                      <SelectItem value="3">3 stars - Average</SelectItem>
                      <SelectItem value="2">2 stars - Poor</SelectItem>
                      <SelectItem value="1">1 star - Very Poor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Review Title
                  </label>
                  <input
                    className="w-full rounded border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                    placeholder="Summarize your review"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Review Content
                  </label>
                  <Textarea
                    placeholder="Write your review here..."
                    className="min-h-32"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setShowReviewForm(false)}>
                  Cancel
                </Button>
                <Button>Submit Review</Button>
              </CardFooter>
            </Card>
          )}

          {/* Reviews list */}
          <div className="space-y-4">
            {reviews.map((review) => (
              <Card key={review.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarFallback>
                          {review.user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                        {review.user.avatar && (
                          <AvatarImage src={review.user.avatar} />
                        )}
                      </Avatar>
                      <div>
                        <div className="font-medium">{review.user.name}</div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          {review.user.isVerifiedBuyer && (
                            <span className="mr-2 text-green-600 flex items-center">
                              <svg
                                className="h-3 w-3 mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              Verified Buyer
                            </span>
                          )}
                          <time dateTime={review.date}>
                            {new Date(review.date).toLocaleDateString()}
                          </time>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-base">{review.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm">{review.content}</p>
                </CardContent>
                <CardFooter className="pt-1">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="mr-4">Was this review helpful?</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2"
                    >
                      <ThumbsUp className="h-3 w-3 mr-1" />
                      <span>{review.helpfulCount}</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2"
                    >
                      <ThumbsDown className="h-3 w-3 mr-1" />
                      <span>{review.notHelpfulCount}</span>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductReviews;
