
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ThumbsUp, ThumbsDown } from "lucide-react";

interface Question {
  id: string;
  content: string;
  date: string;
  user: {
    name: string;
    avatar?: string;
    isVerifiedBuyer?: boolean;
  };
  answers: Answer[];
}

interface Answer {
  id: string;
  content: string;
  date: string;
  user: {
    name: string;
    avatar?: string;
    isSeller?: boolean;
    isVerifiedBuyer?: boolean;
  };
  helpfulCount: number;
  notHelpfulCount: number;
}

interface ProductQuestionsProps {
  productId: string;
}

export function ProductQuestions({ productId }: ProductQuestionsProps) {
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  
  // Sample questions data
  const questions: Question[] = [
    {
      id: "1",
      content: "Is this compatible with Arduino Uno R3?",
      date: "2025-03-10",
      user: {
        name: "Robert Chen",
        avatar: undefined,
      },
      answers: [
        {
          id: "a1",
          content: "Yes, this component is fully compatible with the Arduino Uno R3. You'll just need to connect it to the appropriate pins as described in the documentation. Let me know if you have any specific setup questions.",
          date: "2025-03-11",
          user: {
            name: "TechStore",
            avatar: undefined,
            isSeller: true,
          },
          helpfulCount: 5,
          notHelpfulCount: 0,
        },
        {
          id: "a2",
          content: "I've used it with my Arduino Uno and it works great. Just make sure to check the voltage requirements.",
          date: "2025-03-12",
          user: {
            name: "Emily Thompson",
            avatar: undefined,
            isVerifiedBuyer: true,
          },
          helpfulCount: 3,
          notHelpfulCount: 0,
        },
      ],
    },
    {
      id: "2",
      content: "What's the maximum operating temperature for this component?",
      date: "2025-03-05",
      user: {
        name: "Thomas Miller",
        avatar: undefined,
        isVerifiedBuyer: true,
      },
      answers: [
        {
          id: "a3",
          content: "The maximum operating temperature is 85°C (185°F). It's designed for standard indoor electronic applications. For outdoor or industrial applications that might exceed this temperature, additional cooling might be required.",
          date: "2025-03-05",
          user: {
            name: "TechStore",
            avatar: undefined,
            isSeller: true,
          },
          helpfulCount: 7,
          notHelpfulCount: 1,
        },
      ],
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold">Questions & Answers</h3>
        <Button onClick={() => setShowQuestionForm(!showQuestionForm)}>
          Ask a Question
        </Button>
      </div>

      {showQuestionForm && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Ask a Question</CardTitle>
            <CardDescription>
              Have a question about this product? Ask the seller or community.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Type your question here..."
              className="min-h-32"
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setShowQuestionForm(false)}>
              Cancel
            </Button>
            <Button>Submit Question</Button>
          </CardFooter>
        </Card>
      )}

      <div className="space-y-6">
        {questions.map((question) => (
          <Card key={question.id}>
            <CardHeader className="pb-2">
              <div className="flex items-start gap-4">
                <Avatar className="h-8 w-8 mt-1">
                  <AvatarFallback>
                    {question.user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                  {question.user.avatar && (
                    <AvatarImage src={question.user.avatar} />
                  )}
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center mb-1">
                    <span className="font-medium">{question.user.name}</span>
                    <span className="mx-2 text-xs text-muted-foreground">asked:</span>
                    <time className="text-xs text-muted-foreground" dateTime={question.date}>
                      {new Date(question.date).toLocaleDateString()}
                    </time>
                    {question.user.isVerifiedBuyer && (
                      <Badge variant="outline" className="ml-2 text-xs bg-green-50 border-green-200 text-green-700">
                        Verified Buyer
                      </Badge>
                    )}
                  </div>
                  <p className="text-base font-medium">{question.content}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {question.answers.length > 0 ? (
                <div className="space-y-4 pl-10 border-l mt-4">
                  {question.answers.map((answer) => (
                    <div key={answer.id} className="space-y-2">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-8 w-8 mt-1">
                          <AvatarFallback>
                            {answer.user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                          {answer.user.avatar && (
                            <AvatarImage src={answer.user.avatar} />
                          )}
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center mb-1">
                            <span className="font-medium">{answer.user.name}</span>
                            {answer.user.isSeller && (
                              <Badge className="ml-2 text-xs">
                                Seller
                              </Badge>
                            )}
                            {answer.user.isVerifiedBuyer && (
                              <Badge variant="outline" className="ml-2 text-xs bg-green-50 border-green-200 text-green-700">
                                Verified Buyer
                              </Badge>
                            )}
                            <span className="mx-2 text-xs text-muted-foreground">answered:</span>
                            <time className="text-xs text-muted-foreground" dateTime={answer.date}>
                              {new Date(answer.date).toLocaleDateString()}
                            </time>
                          </div>
                          <p className="text-sm">{answer.content}</p>
                          <div className="flex items-center mt-2 text-sm text-muted-foreground">
                            <span className="mr-4">Was this answer helpful?</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 px-2"
                            >
                              <ThumbsUp className="h-3 w-3 mr-1" />
                              <span>{answer.helpfulCount}</span>
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 px-2"
                            >
                              <ThumbsDown className="h-3 w-3 mr-1" />
                              <span>{answer.notHelpfulCount}</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="pl-10 text-muted-foreground italic">
                  No answers yet. Be the first to reply!
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="ml-10">
                Answer this question
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ProductQuestions;
