# Semantic Service Contract and Discovery

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

## Goal

The goal of this project is to define a series of components that enable semantic contract definition, discovery and consumption.

This project will provide several prototype implementations to validate key concepts, proposed language extensions and usage patterns. All implementations are governed by the same conceptual architecture. And the project aims at providing interoperability across different implementations.

SSCD is designed specifically for semantic service definition and discovery. It’s **not** meant to model ontologies. SSCD leverages ontology languages such as OWL in some cases to express complex knowlege. 

## What's Next?

* Learn about key [Concepts](docs/Concepts.md).