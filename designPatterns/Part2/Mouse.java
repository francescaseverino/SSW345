package designPatterns.Part2;

public class Mouse implements ComputerPart {

    @Override
    public void accept(ComputerPartVisitor computerPartVisitor) { 
        computerPartVisitor.visit(this);
    }
    
}
    