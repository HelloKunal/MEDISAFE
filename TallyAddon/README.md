
# Requirement
Microsoft.net framework version 4

# Get Started

Open CMD in administrator Mode (Elevated mode)

Type cd C:\Windows\Microsoft.NET\Framework64\v4.0.30319 ;

Type regasm PaymentsQr.dll /codebase ;Give Full path of the PaymentsQr.dll file

you will get success message after it registered

Load PaymentsQRPrime.tdl

# Working
1) After loading tdl file  goto->Company Features(f11)

2) Goto->Accounting features

       For Prime goto->f11 and Set Enable Qr Code in Sales Invoice->Yes under Other features.

3) Set Enable Qr Code in Sales Invoice -> Yes

4) Select Payment Mode in which you want to receive amount

5) Set Include Amount-> Yes (Amount will be included in Qr Code)

6) Enter Information Based on Payment Mode (Make sure Details are valid)

7) After Done with Configuration, Add/Open Sales Voucher

8) There will be a Button **Generate Qr Code** Click that to button to generate Qr Code for that Invoice
