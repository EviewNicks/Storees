import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div>
      <h3 className="text-6xl text-muted-foreground">Store Starter</h3>
      <Button value={"Click me"} variant="default" size="lg">
        Click Me
      </Button>
    </div>
  );
};
export default HomePage;
