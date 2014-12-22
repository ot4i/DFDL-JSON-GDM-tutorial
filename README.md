vCard-JSON-GDM-tutorial
=======================
This IBM Integration Bus V10 Open Beta technology tutorial demonstrates how you can transform data from one format 
to another by using the Graphical Data Mapping editor. In this particular scenario, the Graphical Data Mapping editor 
is used to transform messages between the DFDL modelling language and the JSON data format.

An IBM Integration Bus message map is used to transform data from an input file that contains vCard records into 
multiple JSON messages. The content of the data is also validated. Depending on the information included in each record, 
the corresponding JSON message produced might be a reject message or a valid message.

Whether you are an experienced IBM Integration Bus developer or just starting to use the product, you can use this 
tutorial to learn how to achieve the following tasks:
- Learn about core IBM Integration Bus concepts
- Install and configure IBM Integration Bus Toolkit
- Dynamically model a JSON message by using the Add User-Defined function in the Graphical Data Mapping editor.
- Define transforms between an input message and an output message.
- Determine whether or not a transform is applied by using XPATH conditional expressions on a transform within a message map.
- Validate input content and determine which type of output message to generate by using conditional expressions in a message map.
- Deploy your code into the run time environment and test the sample

This tutorial provides different files:
- Complete_solution_vCardToJsonPI.zip
- InitialvCardToJsonPI.zip
- vcard sample accept.txt
- vcard sample multi records.txt
- vcard Sample reject.txt

/*******************************************************************************
* Copyright (c) 2014 IBM Corporation and other Contributors
*
* All rights reserved. This program and the accompanying materials
* are made available under the terms of the Eclipse Public License v1.0
* which accompanies this distribution, and is available at
* http://www.eclipse.org/legal/epl-v10.html
*
* Contributors:
* IBM - initial implementation
*******************************************************************************/
