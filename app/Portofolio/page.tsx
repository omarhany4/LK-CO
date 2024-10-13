"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PortCard from "../component/PortofolioCards";
import PortModal from "../component/Portmodal";

export default function TabsDemo() {
  return (
    <div className="flex flex-col justify-center items-center bg-skin-inverted ">
      <div className="flex text-center pt-32 pb-10 text-4xl font-extrabold">
        My Portofolio
      </div>
      <Tabs defaultValue="1" className=" w-full max-w-7xl mb-32 ">
        <TabsList className="grid w-full grid-cols-4 mb-10 bg-skin-inverted ">
          <TabsTrigger
            className="data-[state=active]:bg-orange-400 rounded-3xl text-xl"
            value="1"
          >
            Lobna The Freelancer
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-orange-400 rounded-3xl text-xl "
            value="2"
          >
            Lobna The Trainer
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-orange-400 rounded-3xl text-xl"
            value="3"
          >
            Lobna the manager
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-orange-400 rounded-3xl text-xl"
            value="4"
          >
            Lobna The Advisor
          </TabsTrigger>
        </TabsList>
        <TabsContent value="1">
          <Card className="flex flex-col justify-center align-middle text-center ">
            <CardHeader>
              <CardTitle>Lobna The Freelancer</CardTitle>
              <CardDescription>Be Free , like a lancer</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <PortCard />
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="2">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <PortCard />
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="3">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="4">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
