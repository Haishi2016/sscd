# Key Concepts

## Motivation

Traditional service contracts define syntax of method invocation. Semantic Service Contract defines semantics of methods. Consider this case: as an API designer, you are designing a simple service contract for loan customer management. The interface allows add, update, remove customers as well as making loan approval decisions. It may look something like this:
```c#
public interface ICustomerManager
{
    void Create(Customer newCustomer);
    void Update(string id, Customer updatedCustomer);
    void Delete(string id);
    bool ShouldApprove(Customer customer, double loanAmount);
}
```
Although this interface tells your users how to call the methods, it captures no semantic meanings of these methods. The method name **suggests** what the method does, but it doesn’t **define** what the method should do. For example, what does **Create** mean? You can probably guess that this method is meant for creating a new Customer instance in some sort of data store. But, how do we explicit express this (and hopefully reinforce this, automatically)?

Now imagine a different scenario: you are developing a photo album application. And you wish to call a service that can help you to detect faces on user-uploaded photos. How do you find such as service? The short answer is – you can’t. There are no known mechanisms for you to discover a service by functional requirements. The existing service discovery solutions allow you to discover how to consumer services. They don’t allow you to find a service that can deliver the functionality you need. 

Semantic Service Contract and Discovery (SSCD) aims to provide a way to define, to discover and to consume services by semantic meanings. In the photo scenario above, you’ll be able to look for a service that can actually do face detection for you, not a service that is named “DetectingFaces” (with no guarantee that it will actual do anything related to face detection).

The semantic service discovery can be conducted by a combination of functional and non-functional requirements. For example, SSCD allows discover services by SLA, performance benchmarks as well as billing methods and pricing details. 

## Semantic Lexicon

### Nouns

Nouns represent objects to be manipulated.

### Verbs

Verbs define actions to be taken.   

## State

## Intention
SSCD defines several types of intentions.

### Creation
Create a new object instance.

### Destroy
Destory an object. 

### Find
Find an object by some searching criteria. 

### List
List objects that satisfy some filtering criteria. 

### State Reconciliation
Reconcile an object’s current state with desired state. 

### Transform
Tranform an object from one type to another.

