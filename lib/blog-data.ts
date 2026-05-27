export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  content: string
}

export const posts: BlogPost[] = [
  {
    slug: "vietas-theorem",
    title: "Vieta's Theorem",
    excerpt:
      "An introduction to Vieta's Theorem",
    date: "2026-02-20",
    readTime: "8 min read",
    category: "Math",
    content: `## 1. Definition

A polynomial in $x$ is a sum of multiples of powers of $x$. If the highest power of $x$ is $n$, then the polynomial is described as having degree $n$ in $x$.

**Definition 1.1.** A polynomial $P(x)$ of degree $n$ is defined as:

$$P(x) = a_n x^n + a_{n-1} x^{n-1} + \\cdots + a_1 x + a_0$$

where:
- $a_n, a_{n-1}, \\ldots, a_0$ are constants called **coefficients**.
- $a_n$, where $a_n \\neq 0$, is the **leading coefficient**.
- $n$ is a non-negative integer called the **degree** of the polynomial, denoted as $\\deg(P)$.

## 2. Roots Of A Polynomial

Roots of a polynomial are such that when $\\alpha$ is a root of the polynomial $P(x)$, then $P(\\alpha) = 0$. When a polynomial has an equal pair of roots, say $(x-2)^2(x-1)$, the roots are $2, 2$ and $1$. Subsequently we can say that each polynomial of degree $n$ has exactly $n$ roots.

**Definition 2.1.** The $k$-th symmetric sum, $S_k$, is given by:

$$S_k(x_1, \\ldots, x_n) = \\sum_{1 \\leq i_1 < i_2 < \\cdots < i_k \\leq n} x_{i_1} x_{i_2} \\cdots x_{i_k}$$

If we have a cubic polynomial with roots $\\alpha, \\beta, \\gamma$, the symmetric sums are simply:

$$S_1 = \\alpha + \\beta + \\gamma$$

$$S_2 = \\alpha\\beta + \\beta\\gamma + \\gamma\\alpha$$

$$S_3 = \\alpha\\beta\\gamma$$

For a cubic polynomial $P(x)$ where the leading coefficient is 1, these sums determine the coefficients:

$$P(x) = x^3 - (\\alpha + \\beta + \\gamma)x^2 + (\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha)x - (\\alpha\\beta\\gamma)$$

Or:

$$P(x) = x^3 - S_1 x^2 + S_2 x - S_3$$

Are you able to do the same for a quadratic polynomial? Notice anything familiar?

## 2.1 Vieta's Theorem

**Definition 2.2.** A direct consequence to this is Vieta's Theorem. Let a polynomial $P(x)$:

$$P(x) = a_n x^n + a_{n-1} x^{n-1} + \\cdots + a_2 x^2 + a_1 x + a_0$$

$$P(x) = a_n \\left( x^n + \\frac{a_{n-1}}{a_n} x^{n-1} + \\cdots + \\frac{a_2}{a_n} x^2 + \\frac{a_1}{a_n} x + \\frac{a_0}{a_n} \\right)$$

Similar to the above cubic case, we can then say that:

$$P(x) = a_n \\left( x^n - S_1 x^{n-1} + S_2 x^{n-2} - S_3 x^{n-3} + \\cdots + (-1)^n S_n \\right)$$

We factor out $a_n$ so that the leading coefficient inside the bracket is 1, and so we can write it in terms of $S$. Then,

**Coefficient of** $x^{n-1}$: $\\dfrac{a_{n-1}}{a_n} = -S_1 \\implies S_1 = -\\dfrac{a_{n-1}}{a_n}$

**Coefficient of** $x^{n-2}$: $\\dfrac{a_{n-2}}{a_n} = S_2 \\implies S_2 = \\dfrac{a_{n-2}}{a_n}$

**Coefficient of** $x^{n-3}$: $\\dfrac{a_{n-3}}{a_n} = -S_3 \\implies S_3 = -\\dfrac{a_{n-3}}{a_n}$

So, we can generalise that:

$$S_k = (-1)^k \\frac{a_{n-k}}{a_n}$$

and we are done.

## 2.2 Tutorial

**[AMC 10A 2006]** What is the sum of the reciprocals of the roots of the equation:

$$\\frac{2003}{2004}x + 1 + \\frac{1}{x} = 0$$

We can turn it into a quadratic:

$$\\frac{2003}{2004}x^2 + x + 1 = 0$$

Suppose $\\alpha$ and $\\beta$ are roots to the equation, so:

$$\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha + \\beta}{\\alpha\\beta} = \\frac{S_1}{S_2}$$

Remember that for a $n$-degree polynomial:

$$S_1 = -\\frac{a_{n-1}}{a_n}, \\quad S_2 = \\frac{a_{n-2}}{a_n}$$

For a quadratic:

$$S_1 = -\\frac{a_1}{a_2}, \\quad S_2 = \\frac{a_0}{a_2}$$

So,

$$\\frac{S_1}{S_2} = \\frac{-\\frac{2004}{2003}}{\\frac{2004}{2003}} = -1$$

## 2.3 Exercises

**1.** Let $r_1, r_2, r_3$ be the roots of the polynomial $x^3 - 14x^2 + 15x - 16$. Compute $\\dfrac{1}{r_1} + \\dfrac{1}{r_2} + \\dfrac{1}{r_3}$.

**2. [AMC 10A 2006]** Let $a$ and $b$ be the roots of the equation $x^2 - mx + 2 = 0$. Suppose that $a + \\dfrac{1}{b}$ and $b + \\dfrac{1}{a}$ are the roots of the equation $x^2 - px + q = 0$. What is $q$?

**3. [USAMO 1984]** The product of two of the four roots of the quartic equation $x^4 - 18x^3 + kx^2 + 200x - 1984 = 0$ is $-32$. Determine the value of $k$.

**Answers:** $\\dfrac{15}{16}$, $6$, $86$.`,
  },
  {
    slug: "Sums",
    title: "Sums",
    excerpt:
      "An introduction to a mathematical notation and some techniques",
    date: "2026-02-28",
    readTime: "20 min read",
    category: "Math",
    content: `## A Note To The Reader

This article is gonna be a small chapter from a upcoming book that i am still currently working on! Its called Introduction To Inequalities.
---

## 1. Basic Notations And Some Properties

There will be some notations and symbols that we will use:

- $\\sum$ denotes the **Sigma Notation**
- $\\prod$ denotes the **Pi Notation**
- $\\mathbb{Z}$ denotes the set of integers
- $\\mathbb{Z}^+$ denotes the set of positive integers
- $\\mathbb{N}$ denotes the set of natural numbers
- **LHS** and **RHS** refer to Left Hand Side and Right Hand Side respectively
- $\\geq$ is read as "greater than or equal to"
- $>$ is read as "strictly greater than"
- $\\implies$ is read as "this implies that"
- $\\equiv$ is read as "is equivalent to"
- $\\iff$ is read as "if and only if"
- $A \\succ B$ is read as "A majorises B"

## 1.1 The Sigma Notation

In order to express a sum of multiple numbers, we use the sigma notation so that we do not have to write out all the sums. For example:

$$1 + 2 + 3 + 4 + 5 + \\cdots + n = \\sum_{k=1}^{n} k$$

The following is what I read as "Sigma from $k = 1$ to $k = n$", which simply means the sum from $1$ to $n$. Note that the $k$ is a **dummy variable**. It's just there it can be anything!

$$1 + 2 + 3 + 4 + 5 + \\cdots + n = \\sum_{\\text{blablabla}=1}^{n} \\text{blablabla}$$

So basically:

$$\\text{start} + \\cdots + \\text{end} = \\sum_{\\text{anything}=\\text{start}}^{\\text{end}} \\text{anything}$$

Now, let's play around with the sigma notation:

$$2 + 4 + 6 + \\cdots + 2n = 2(1 + 2 + 3 + 4 + \\cdots + n) = 2\\sum_{k=1}^{n} k$$

Notice how there is no difference if the 2 is inside the sigma notation or outside of it:

$$\\sum_{k=1}^{n} 2k = 2 \\sum_{k=1}^{n} k$$

So generally, if $c$ is a constant, then:

$$\\sum_{k=1}^{n} ck = c \\sum_{k=1}^{n} k$$

## 1.2 Properties Of The Sigma Notation

Here are some general properties of the Sigma Notation.

**Proposition 1.** For any constant $c$:

$$\\sum_{k=1}^{n} c = nc$$

*Proof:* We are simply just adding $c$ to itself $n$ times, as there is no "dummy variable" within the Sigma Notation.

$$\\sum_{k=1}^{n} c = \\underbrace{c + c + \\cdots + c}_{n \\text{ times}} = n \\cdot c$$

**Proposition 2.** For any constant $c$:

$$\\sum_{k=1}^{n} ck = c \\sum_{k=1}^{n} k$$

*Proof:* We can simply factor $c$ out of the expanded sum.

$$\\sum_{k=1}^{n} ck = c + 2c + \\cdots + nc = c(1 + 2 + \\cdots + n) = c \\sum_{k=1}^{n} k$$

**Proposition 3.**

$$\\sum_{k=1}^{n} (a_k \\pm b_k) = \\sum_{k=1}^{n} a_k \\pm \\sum_{k=1}^{n} b_k$$

*Proof:* Expanding the notation into sums and grouping them together:

$$\\sum_{k=1}^{n} (a_k + b_k) = (a_1 + b_1) + (a_2 + b_2) + \\cdots + (a_n + b_n)$$

$$= (a_1 + \\cdots + a_n) + (b_1 + \\cdots + b_n) = \\sum_{k=1}^{n} a_k + \\sum_{k=1}^{n} b_k$$

We have discussed some basic properties of the sigma notation. Now let's do some examples.

**Example 1.1.** Evaluate the following:

$$\\sum_{i=1}^{10} (3i - 4)$$

We can expand the sum first:

$$\\sum_{i=1}^{10} (3i - 4) = \\sum_{i=1}^{10} 3i - \\sum_{i=1}^{10} 4 = 3(1 + 2 + 3 + \\cdots + 10) - 4 \\cdot 10 = 3(55) - 40 = 125$$

**Example 1.2.** Evaluate the following:

$$\\sum_{i=1}^{4} (i^3 + 3i - 8)$$

Simply expand:

$$\\sum_{i=1}^{4} (i^3 + 3i - 8) = \\sum_{i=1}^{4} i^3 + \\sum_{i=1}^{4} 3i - \\sum_{i=1}^{4} 8$$

$$= (1^3 + 2^3 + 3^3 + 4^3) + 3(1 + 2 + 3 + 4) - 8 \\cdot 4 = 100 + 30 - 32 = 98$$

## 1.3 Evaluating Sums

We want to unlock a very powerful tool first, the ability to evaluate any sum we want. Being able to evaluate $1 + 2 + 3 + 4 + \\cdots + 10$ is not hard with a calculator, but it would be very annoying to evaluate a large sum if there are a lot of terms!

Let's start by analysing $1 + 2 + 3 + 4 + \\cdots + 10$:

$$(1 + 10) + (2 + 9) + \\cdots + (5 + 6)$$

If we add 1 and 10, 2 and 9, 3 and 8 ... and 5 together with 6 we get 5 "elevens". So the sum is just $55$.

Let's try to find a formula for the sum of any number!

$$1 + 2 + 3 + \\cdots + n$$

We add 1 and $n$ together, 2 and $n-1$ together ...

$$\\underbrace{(n+1) + (n+1) + (n+1) + \\cdots + (n+1)}_{\\frac{n}{2} \\text{ times}}$$

$$= \\frac{n}{2}(n+1)$$

And finally:

$$\\boxed{\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}}$$

**Example 1.3.** Evaluate the sum of integers from 21 to 50:

$$21 + 22 + 23 + \\cdots + 50$$

Simply take the sum from 1 to 50 and subtract the sum from 1 to 20:

$$\\sum_{k=21}^{50} k = \\sum_{k=1}^{50} k - \\sum_{k=1}^{20} k = \\frac{50}{2}(51) - \\frac{20}{2}(21) = 25(51) - 10(21) = 1275 - 210 = 1065$$

---

### Sum of $k^2$

Consider $(k+1)^3 - k^3 = 3k^2 + 3k + 1$. If we sum both sides from $k = 1$ to $n$:

$$\\sum_{k=1}^{n} \\left[(k+1)^3 - k^3\\right] = \\sum_{k=1}^{n} (3k^2 + 3k + 1)$$

The left side telescopes to $(n+1)^3 - 1$:

$$(n+1)^3 - 1 = 3\\sum_{k=1}^{n} k^2 + 3\\left[\\frac{n(n+1)}{2}\\right] + n$$

$$2(n^3 + 3n^2 + 3n) - 3n(n+1) - 2n = 6\\sum_{k=1}^{n} k^2$$

$$2n^3 + 3n^2 + n = 6\\sum_{k=1}^{n} k^2$$

$$n(n+1)(2n+1) = 6\\sum_{k=1}^{n} k^2$$

$$\\boxed{\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}}$$

### Sum of $k^3$

The same method can be used by considering $(k+1)^4 - k^4 = 4k^3 + 6k^2 + 4k + 1$:

$$\\sum_{k=1}^{n} \\left[(k+1)^4 - k^4\\right] = 4\\sum_{k=1}^{n} k^3 + 6\\sum_{k=1}^{n} k^2 + 4\\sum_{k=1}^{n} k + \\sum_{k=1}^{n} 1$$

$$(n+1)^4 - 1 = 4\\sum_{k=1}^{n} k^3 + n(n+1)(2n+1) + 2n(n+1) + n$$

$$n^4 + 4n^3 + 6n^2 + 4n - (2n^3 + 3n^2 + n) - (2n^2 + 2n) - n = 4\\sum_{k=1}^{n} k^3$$

$$n^4 + 2n^3 + n^2 = 4\\sum_{k=1}^{n} k^3$$

$$n^2(n+1)^2 = 4\\sum_{k=1}^{n} k^3$$

$$\\boxed{\\sum_{k=1}^{n} k^3 = \\left[\\frac{n(n+1)}{2}\\right]^2}$$

### Summary of Formulas

$$\\sum_{k=1}^{n} c = nc$$

$$\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}$$

$$\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}$$

$$\\sum_{k=1}^{n} k^3 = \\left[\\frac{n(n+1)}{2}\\right]^2$$

**Example 1.4.** Evaluate the following:

$$\\sum_{k=1}^{n} (2k-1)^2$$

Expand the square first: $(2k-1)^2 = 4k^2 - 4k + 1$.

$$\\sum_{k=1}^{n} (4k^2 - 4k + 1) = 4\\sum_{k=1}^{n} k^2 - 4\\sum_{k=1}^{n} k + \\sum_{k=1}^{n} 1$$

$$= 4\\left[\\frac{n(n+1)(2n+1)}{6}\\right] - 4\\left[\\frac{n(n+1)}{2}\\right] + n$$

$$= \\frac{2n(n+1)(2n+1)}{3} - 2n(n+1) + n$$

$$= \\frac{4n^3 + 6n^2 + 2n - 6n^2 - 6n + 3n}{3} = \\frac{4n^3 - n}{3} = \\frac{n(4n^2 - 1)}{3}$$

**Example 1.5.** Evaluate the following in terms of $n$:

$$\\sum_{k=1}^{n} (k-1)^3$$

First, we expand: $(k-1)^3 = k^3 - 3k^2 + 3k - 1$.

$$\\sum_{k=1}^{n} (k^3 - 3k^2 + 3k - 1) = \\sum_{k=1}^{n} k^3 - 3\\sum_{k=1}^{n} k^2 + 3\\sum_{k=1}^{n} k - \\sum_{k=1}^{n} 1$$

$$= \\left[\\frac{n(n+1)}{2}\\right]^2 - 3\\left[\\frac{n(n+1)(2n+1)}{6}\\right] + 3\\left[\\frac{n(n+1)}{2}\\right] - n$$

$$= \\frac{n^2(n+1)^2 - 2n(n+1)(2n+1) + 6n(n+1) - 4n}{4}$$

$$= \\frac{(n^4 + 2n^3 + n^2) - (4n^3 + 6n^2 + 2n) + (6n^2 + 6n) - 4n}{4}$$

$$= \\frac{n^4 - 2n^3 + n^2}{4} = \\frac{n^2(n-1)^2}{4}$$

## 1.4 The Telescopic Sum

Let $a_k = f(k) - f(k+1)$, then:

$$\\sum_{k=1}^{n} a_k = \\sum_{k=1}^{n} [f(k) - f(k+1)]$$

$$a_1 + a_2 + \\cdots + a_n = \\underbrace{[f(1) - f(2)]}_{k=1} + \\underbrace{[f(2) - f(3)]}_{k=2} + \\cdots + \\underbrace{[f(n) - f(n+1)]}_{k=n}$$

$$S_n = f(1) - f(n+1)$$

The telescopic sum is where most terms cancel each other out, leaving only a few terms from the beginning and the end.

---

Here is a useful technique: **partial fractions**.

**Example 1.6.** Decompose the following into partial fractions:

$$\\frac{x+7}{(x-2)(x+1)}$$

Let:

$$\\frac{x+7}{(x-2)(x+1)} \\equiv \\frac{A}{x-2} + \\frac{B}{x+1}$$

$$x + 7 \\equiv A(x+1) + B(x-2)$$

The $\\equiv$ sign indicates that for any value of $x$, the LHS and RHS will always be equivalent. We can substitute any value of $x$ to find $A$ and $B$.

Let $x = -1$: $(-1) + 7 = A(0) + B(-3)$, so $6 = -3B \\implies B = -2$.

Let $x = 2$: $(2) + 7 = A(3) + B(0)$, so $9 = 3A \\implies A = 3$.

Then:

$$\\frac{x+7}{(x-2)(x+1)} = \\frac{3}{x-2} - \\frac{2}{x+1}$$

**Example 1.7.** Evaluate the sum:

$$S_n = \\sum_{k=1}^{n} \\frac{2}{k^2 + 2k}$$

Express in partial fractions:

$$\\frac{2}{k(k+2)} \\equiv \\frac{A}{k} + \\frac{B}{k+2}$$

$$2 \\equiv A(k+2) + Bk$$

Let $k = 0$: $2 = 2A \\implies A = 1$.

Let $k = -2$: $2 = -2B \\implies B = -1$.

$$\\frac{2}{k(k+2)} = \\frac{1}{k} - \\frac{1}{k+2}$$

Then expand:

$$S_n = \\left(\\frac{1}{1} - \\frac{1}{3}\\right) + \\left(\\frac{1}{2} - \\frac{1}{4}\\right) + \\left(\\frac{1}{3} - \\frac{1}{5}\\right) + \\cdots + \\left(\\frac{1}{n-1} - \\frac{1}{n+1}\\right) + \\left(\\frac{1}{n} - \\frac{1}{n+2}\\right)$$

After cancellation, $1 + \\frac{1}{2}$ is left at the front and $-\\frac{1}{n+1} - \\frac{1}{n+2}$ is left at the back:

$$S_n = \\frac{3}{2} - \\frac{1}{n+1} - \\frac{1}{n+2}$$

**Example 1.8.** *(2022 AMC 10)* The sum:

$$\\frac{1}{2!} + \\frac{2}{3!} + \\frac{3}{4!} + \\cdots + \\frac{2021}{2022!}$$

can be expressed as $a - \\dfrac{1}{b!}$, where $a$ and $b$ are positive integers. What is $a + b$?

For all positive integers $n$, we have:

$$\\frac{n}{(n+1)!} = \\frac{(n+1) - 1}{(n+1)!} = \\frac{1}{n!} - \\frac{1}{(n+1)!}$$

So:

$$\\frac{1}{2!} + \\frac{2}{3!} + \\cdots + \\frac{2021}{2022!} = \\left(\\frac{1}{1!} - \\frac{1}{2!}\\right) + \\left(\\frac{1}{2!} - \\frac{1}{3!}\\right) + \\cdots + \\left(\\frac{1}{2021!} - \\frac{1}{2022!}\\right)$$

$$= 1 - \\frac{1}{2022!}$$

So $a + b = 1 + 2022 = \\boxed{2023}$.

---

**Example 1.9.** *(Purple Comet 2004)* Define $a_k = (k^2 + 1)k!$ and $b_k = a_1 + a_2 + a_3 + \\cdots + a_k$. Let $\\dfrac{a_{100}}{b_{100}} = \\dfrac{m}{n}$ where $m$ and $n$ are relatively prime natural numbers. Find $n - m$.

Our strategy is to try to find a telescopic sum with cancellation:

$$(k^2 + 1)k! = k(k \\cdot k!) + k! = k[(k+1)! - k!] + k! = k(k+1)! - k \\cdot k! + k!$$

$$= k(k+1)! - k!(k-1)$$

So for $b_k$:

$$b_k = \\sum_{i=1}^{k} a_i = (1 \\cdot 2! - 1! \\cdot 0) + (2 \\cdot 3! - 2! \\cdot 1) + (3 \\cdot 4! - 3! \\cdot 2) + \\cdots + (k(k+1)! - k!(k-1))$$

After telescoping cancellation:

$$b_k = k(k+1)!$$

And finally:

$$\\frac{a_k}{b_k} = \\frac{(k^2+1)k!}{k(k+1)!} = \\frac{k^2+1}{k(k+1)} = \\frac{k^2+1}{k^2+k}$$

For $k = 100$:

$$\\frac{a_{100}}{b_{100}} = \\frac{100^2 + 1}{100^2 + 100} = \\frac{10001}{10100}$$

$$n - m = 10100 - 10001 = \\boxed{99}$$

## 1.5 The Pi Notation

Just as the Greek letter Sigma ($\\sum$) is used to denote a summation, the Greek letter Pi ($\\prod$) is used in mathematics to denote a **product** of a sequence of terms.

Here are some properties about the Pi Notation:

$$\\prod_{i=1}^{n} c = c^n$$

$$\\prod_{i=1}^{n} (a_i \\cdot b_i) = \\left(\\prod_{i=1}^{n} a_i\\right)\\left(\\prod_{i=1}^{n} b_i\\right)$$

$$\\prod_{i=1}^{n} i = n!$$

Pretty self-explanatory properties! The Pi notation is often used to display a large amount of products compactly.

**Example 1.10.** Simplify the following product into a single fraction:

$$\\prod_{n=2}^{k} \\frac{n-1}{n}$$

Simply expand the product:

$$\\prod_{n=2}^{k} \\frac{n-1}{n} = \\frac{1}{2} \\cdot \\frac{2}{3} \\cdot \\frac{3}{4} \\cdots \\frac{k-1}{k} = \\frac{1}{k}$$

**Example 1.11.** *(Harvard-MIT Mathematics Tournament 2006)* Find:

$$\\frac{2^2}{2^2 - 1} \\cdot \\frac{3^2}{3^2 - 1} \\cdot \\frac{4^2}{4^2 - 1} \\cdots \\frac{2006^2}{2006^2 - 1}$$

We can express it in Pi Notation:

$$\\prod_{n=2}^{2006} \\frac{n^2}{(n-1)(n+1)} = \\prod_{n=2}^{2006} \\frac{n}{n-1} \\cdot \\frac{n}{n+1}$$

$$= \\left(\\frac{2}{1} \\cdot \\frac{3}{2} \\cdot \\frac{4}{3} \\cdots \\frac{2006}{2005}\\right) \\cdot \\left(\\frac{2}{3} \\cdot \\frac{3}{4} \\cdot \\frac{4}{5} \\cdots \\frac{2006}{2007}\\right)$$

$$= \\frac{2006}{1} \\cdot \\frac{2}{2007} = \\boxed{\\frac{4012}{2007}}$$

## 1.6 Cyclic And Symmetric Sums

### Cyclic Sums

A cyclic sum is sometimes specified by $\\sum_{\\text{cyc}}$. This notation implies that all variables are cycled through. Consider a function $f(a_1, a_2, \\ldots, a_n)$:

$$\\sum_{\\text{cyc}} f(a_1, a_2, \\ldots, a_n) = f(a_1, a_2, \\ldots, a_n) + f(a_2, a_3, \\ldots, a_n, a_1) + \\cdots + f(a_n, a_1, a_2, \\ldots, a_{n-1})$$

An example:

$$\\sum_{\\text{cyc}} \\frac{a}{b+c} = \\frac{a}{b+c} + \\frac{b}{c+a} + \\frac{c}{a+b}$$

So $a$ becomes $b$, $b$ becomes $c$ ... for a cycle. If there are more variables, the cycle becomes longer!

However, sometimes we need not cycle through all the variables. So we list out the variables that are to be cycled through beneath the notation:

$$\\sum_{a,b,c} \\frac{ab}{cd} = \\frac{ab}{cd} + \\frac{bc}{ad} + \\frac{ca}{bd}$$

where $d$ remains untouched.

**Example 1.12.** Expand and simplify the following expression for three variables $\\{a, b, c\\}$:

$$\\sum_{\\text{cyc}} \\left(a - \\frac{\\sum_{\\text{cyc}} a}{b+c}\\right)^2$$

We expand the cyclic sum inside first: $\\sum_{\\text{cyc}} a = a + b + c$.

$$\\sum_{\\text{cyc}} \\left(\\frac{-(b+c)}{b+c}\\right)^2 = \\sum_{\\text{cyc}} (-1)^2 = 1 + 1 + 1 = 3$$

**Example 1.13.** Expand and simplify:

$$\\sum_{\\text{cyc}} a \\cdot \\sum_{\\text{cyc}} \\left(b \\cdot \\frac{\\sum_{\\text{cyc}} 1}{c}\\right)$$

We expand the cyclic sum inside first:

$$\\sum_{\\text{cyc}} \\frac{1}{c} = \\frac{1}{a} + \\frac{1}{b} + \\frac{1}{c} = \\frac{ab + bc + ca}{abc}$$

Notice how $\\dfrac{ab + bc + ca}{abc}$ does not change after a cycle:

$$\\sum_{\\text{cyc}} b \\cdot \\frac{ab + bc + ca}{abc} = \\frac{(a+b+c)(ab+bc+ca)}{abc} \\cdot \\frac{1}{\\text{(after simplification)}}$$

$$= \\frac{abc(a+b+c)}{ab+bc+ca}$$

And finally:

$$\\sum_{\\text{cyc}} a \\cdot \\sum_{\\text{cyc}} \\left(b \\cdot \\frac{\\sum_{\\text{cyc}} 1}{c}\\right) = \\frac{abc(a+b+c)^2}{ab+bc+ca}$$

### Symmetric Sums

A symmetric sum $\\sum_{\\text{sym}} f(x_1, x_2, \\ldots, x_n)$ is defined as $\\sum_{\\sigma} f(x_{\\sigma(1)}, x_{\\sigma(2)}, \\ldots, x_{\\sigma(n)})$, where $\\sigma$ ranges over **all permutations** of $(1, 2, \\ldots, n)$.

For three variables $\\{a, b, c\\}$, there are 6 permutations of $abc$: $(a,b,c), (a,c,b), (b,a,c), (b,c,a), (c,a,b), (c,b,a)$.

$$\\sum_{\\text{sym}} abc = abc + acb + bac + bca + cab + cba = 6abc$$

On the other hand, if we want to only consider $ab$ over $\\{a, b, c\\}$:

$$\\sum_{\\text{sym}} ab = ab + ac + ba + bc + ca + cb$$

This is **NOT** to be confused with the cyclic sum:

$$\\sum_{\\text{cyc}} abc = abc + bca + cab = 3abc$$

The cyclic sum is only a single rotation of 3 terms in total, whilst the symmetric sum considers **every possible permutation** of the set.

**Example 1.14.** Expand and simplify the symmetric sum for $\\{a, b, c\\}$:

$$\\sum_{\\text{sym}} (a-b)^2$$

$$= (a-b)^2 + (a-c)^2 + (b-a)^2 + (b-c)^2 + (c-a)^2 + (c-b)^2$$

$$= 2\\left[(a-b)^2 + (b-c)^2 + (c-a)^2\\right]$$

**Example 1.15.** Expand the symmetric sum for $\\{a, b, c, d\\}$:

$$\\sum_{\\text{sym}} ab$$

Starting with $a$: $ab, ac, ad$. Starting with $b$: $ba, bc, bd$ ... So:

$$\\sum_{\\text{sym}} ab = ab + ac + ad + ba + bc + bd + ca + cb + cd + da + db + dc$$

**Example 1.16.** *(Muirhead's Inequality — further discussion in later chapters)*

If $x, y, z$ are non-negative integers, $(7, 3, 1)$ majorises $(5, 4, 2)$:

$$\\sum_{\\text{sym}} x^7 y^3 z \\geq \\sum_{\\text{sym}} x^5 y^4 z^2$$

Expanding:

$$x^7 y^3 z + x^7 z^3 y + y^7 x^3 z + y^7 z^3 x + z^7 x^3 y + z^7 y^3 x \\geq x^5 y^4 z^2 + x^5 z^4 y^2 + y^5 x^4 z^2 + y^5 z^4 x^2 + z^5 x^4 y^2 + z^5 y^4 x^2$$

## 1.7 Exercises

Time to implement what we have learnt!

**1.** Evaluate the following sum:

$$\\sum_{i=1}^{4} (2i - 1)$$

**2.** Find the value of:

$$\\sum_{k=0}^{3} (k^2 + 2)$$

**3.** Find the following sum:

$$\\sum_{n=1}^{5} \\frac{1}{n(n+1)}$$

**4.** Find the value of:

$$\\left(\\sum_{n=1}^{50} n^2\\right) - \\left(\\sum_{n=11}^{50} n^2\\right)$$

**5.** Expand and simplify:

$$\\sum_{j=1}^{n} 4(2 + 2j)^2$$

**6.** Expand and simplify:

$$\\sum_{i=1}^{n} \\left(\\sum_{j=1}^{i} 6j\\right)$$

**7.** Evaluate:

$$\\prod_{k=2}^{n} \\left(1 - \\frac{1}{k^2}\\right)$$

**8.** *(AHSME 1991)* Let $T_n = 1 + 2 + 3 + \\cdots + n$ and:

$$P_n = \\frac{T_2}{T_2 - 1} \\cdot \\frac{T_3}{T_3 - 1} \\cdot \\frac{T_4}{T_4 - 1} \\cdots \\frac{T_n}{T_n - 1}$$

for $n = 2, 3, 4, \\ldots$. Find $P_{1991}$.

**9.** *(AMC 12, 1997)* Find the sum:

$$\\frac{1}{1 \\cdot 3} + \\frac{1}{3 \\cdot 5} + \\cdots + \\frac{1}{(2n-1)(2n+1)} + \\cdots + \\frac{1}{255 \\cdot 257}$$

**10.** *(2001–2002 Mandelbrot)* Define a sequence of numbers by $a_n = 3n^2 + 3n + 1$ so that $a_1 = 7$, $a_2 = 19$, $a_3 = 37$, and so on. Calculate:

$$a_1 + a_2 + \\cdots + a_{100}$$

**11.** *(San Jose State University, Problem of the Week 2011)* Let $p$ and $q$ be positive integers such that:

$$\\frac{p}{q} = 1 + \\frac{1}{2} - \\frac{2}{3} + \\frac{1}{4} + \\frac{1}{5} - \\frac{2}{6} + \\cdots + \\frac{1}{1507} + \\frac{1}{1508} - \\frac{2}{1509} + \\cdots + \\frac{1}{2010}$$

Prove that $p$ is divisible by 2011.

*Hint:* $\\left(-\\frac{3}{3k}\\right)$, and find 2 groups of sums.

**12.** *(USAMT 1999)* Determine the value of:

$$S = \\sqrt{1 + \\frac{1}{1^2} + \\frac{1}{2^2}} + \\sqrt{1 + \\frac{1}{2^2} + \\frac{1}{3^2}} + \\cdots + \\sqrt{1 + \\frac{1}{1999^2} + \\frac{1}{2000^2}}$$

*Hint:* The numerator $n^4 + 2n^3 + 3n^2 + 2n + 1$ is actually the expansion of $(n^2 + n + 1)^2$.

$$f(n) = \\frac{n^2 + n + 1}{n(n+1)}$$

**13.** *(Mandelbrot 1997)* Compute the product:

$$\\frac{(1998^2 - 1996^2)(1998^2 - 1995^2) \\cdots (1998^2 - 0^2)}{(1997^2 - 1996^2)(1997^2 - 1995^2) \\cdots (1997^2 - 0^2)}$$

**14.** Evaluate the infinite product:

$$\\prod_{n=2}^{\\infty} \\left(\\frac{n^3 - 1}{n^3 + 1}\\right)$$

*Hint:* Factor the cubic terms using the sum and difference of cubes identities and observe the telescoping pattern.`,
  },
  {
    "slug": "mechanics-rotational-dynamics",
    "title": "Rotational Dynamics and the Center of Mass",
    "excerpt": "Fundamentals of rotational dynamics",
    "date": "2026-02-05",
    "readTime": "18 min read",
    "category": "Physics",
    "content": "### 1. Dynamics of Many-Particle Systems\n\nIn classical mechanics, extending Newton's laws from a single particle to a system of $N$ particles requires a rigorous separation of internal and external forces. Let the position of the $i$-th particle be $\\mathbf{r}_i$ and its mass be $m_i$. The total force acting on this particle is:\n\n$$ \\mathbf{F}_i = \\mathbf{F}_{i(ext)} + \\sum_{j \\neq i} \\mathbf{F}_{ij(int)} $$\n\nWhere $\\mathbf{F}_{i(ext)}$ represents external fields (gravity, electric fields) and $\\mathbf{F}_{ij(int)}$ represents internal interactions (such as the spring tension in our simulation).\n\n#### 1.1 Derivation of the Center of Mass Motion\n\nSumming Newton's Second Law over all $N$ particles:\n\n$$ \\sum_i \\mathbf{F}_i = \\sum_i \\frac{d}{dt} (m_i \\mathbf{v}_i) = \\frac{d^2}{dt^2} \\sum_i m_i \\mathbf{r}_i $$\n\nWe define the **Center of Mass (CoM)** vector $\\mathbf{R}$ as:\n\n$$ \\mathbf{R} = \\frac{1}{M} \\sum_{i=1}^{N} m_i \\mathbf{r}_i \\quad \\text{where} \\quad M = \\sum m_i $$\n\nSubstituting this definition back into the force equation:\n\n$$ \\mathbf{F}_{net} = \\sum_i \\mathbf{F}_{i(ext)} + \\sum_{i,j} \\mathbf{F}_{ij(int)} = M \\mathbf{\\ddot{R}} $$\n\nAccording to **Newton's Third Law** , $\\mathbf{F}_{ij} = -\\mathbf{F}_{ji}$. Consequently, the double sum over internal forces vanishes exactly. We arrive at the fundamental theorem of system dynamics:\n\n$$ \\mathbf{F}_{ext} = M \\mathbf{A}_{cm} $$\n\n**Implication:** The internal forces (springs) generally cause the system to rotate or vibrate, but they cannot accelerate the Center of Mass. As shown in the simulation below, the CoM (red cross) remains inertial despite the complex motion of the individual masses.\n\n<div style=\"text-align: center; margin: 30px 0;\">\n  <img src=\"https://python-code-aws.trinket.io/python-generated/l0rb3gcb/rotation_com.gif\" alt=\"Rigid Body Rotation Simulation\" style=\"max-width: 100%; border-radius: 4px; border: 1px solid #ddd; box-shadow: 0 4px 6px rgba(0,0,0,0.1);\" />\n  <p style=\"font-size: 0.9em; color: #444; margin-top: 10px;\"><em>Figure 1: A discrete system of masses connected by Hookean springs undergoing pure rotation. The Red Cross indicates the Center of Mass, which remains stationary ($\\mathbf{V}_{cm} = 0$) because $\\mathbf{F}_{ext} = 0$.</em></p>\n</div>\n\n### 2. Rotational Kinetic Energy and König's Theorem\n\nThe kinetic energy $T$ of a system is the sum of the individual kinetic energies. However, calculating this relative to a fixed origin is often cumbersome. **König's Theorem** allows us to decompose energy into translational and rotational terms.\n\nLet the velocity of particle $i$ be written as the velocity of the CoM plus a relative velocity $\\mathbf{v}'_i$:\n\n$$ \\mathbf{v}_i = \\mathbf{V}_{cm} + \\mathbf{v}'_i $$\n\nExpanding the dot product and noting that $\\sum m_i \\mathbf{v}'_i = 0$ by definition, we obtain:\n\n$$ T_{total} = T_{trans} + T_{rot} = \\frac{1}{2} M V_{cm}^2 + \\frac{1}{2} \\sum_i m_i v_i'^2 $$\n\nFor a rigid body rotating with angular velocity $\\omega$, the second term simplifies using the **Moment of Inertia ($I_{cm}$)**:\n\n$$ T_{rot} = \\frac{1}{2} I_{cm} \\omega^2 $$\n\n### 3. Rotational Inertia of Continuous Bodies\n\nWhile discrete sums work for particles, real-world engineering requires calculating the inertia of **continuous rigid bodies**. We replace the summation with a volume integral over density $\\rho(\\mathbf{r})$:\n\n$$ I = \\int_V r_{\\perp}^2 \\, dm = \\int_V r_{\\perp}^2 \\rho(\\mathbf{r}) \\, dV $$\n\nHere, $r_{\\perp}$ is the perpendicular distance from the axis of rotation.\n\n#### 3.1 Derivation: Uniform Thin Rod\n\nConsider a thin rod of mass $M$ and length $L$ lying along the x-axis, rotating about its center ($x=0$). The linear mass density is $\\lambda = M/L$. The mass element is $dm = \\lambda dx$.\n\n$$ I_{rod} = \\int_{-L/2}^{L/2} x^2 (\\lambda dx) = \\lambda \\left[ \\frac{x^3}{3} \\right]_{-L/2}^{L/2} $$\n\n$$ I_{rod} = \\frac{M}{L} \\left( \\frac{L^3}{24} - \\frac{-L^3}{24} \\right) = \\frac{M}{L} \\left( \\frac{L^3}{12} \\right) = \\frac{1}{12} M L^2 $$\n\n*(Note: If rotated about its end, the limits change to $0 \\to L$, yielding $I = \\frac{1}{3}ML^2$)*.\n\n#### 3.2 Derivation: Solid Uniform Cube\n\nConsider a solid cube of side $L$ and mass $M$, rotating about an axis passing through the center of two opposite faces (the z-axis). The density is $\\rho = M/L^3$. The distance from the z-axis is $r^2 = x^2 + y^2$.\n\n$$ I_{cube} = \\rho \\int_{-L/2}^{L/2} \\int_{-L/2}^{L/2} \\int_{-L/2}^{L/2} (x^2 + y^2) \\, dx \\, dy \\, dz $$\n\nEvaluating the triple integral yields:\n\n$$ I_{cube} = \\frac{1}{6} M L^2 $$\n\nThis result is notably smaller than a thin ring of radius $R=L/2$ ($I=MR^2$), demonstrating that mass distribution near the axis reduces rotational resistance.\n\n### 4. Conservation of Angular Momentum\n\nJust as linear force drives translation, **Torque ($\\boldsymbol{\\tau}$)** drives rotation. The rate of change of the system's total angular momentum $\\mathbf{L}$ is equal to the net external torque:\n\n$$ \\frac{d\\mathbf{L}}{dt} = \\boldsymbol{\\tau}_{ext} $$\n\nIn our simulation, there is no external torque acting on the system. Therefore, $\\mathbf{L}$ is a conserved quantity. \n\n$$ \\mathbf{L} = I \\boldsymbol{\\omega} = \\text{constant} $$\n\nIf the springs stretch (masses move outward), $I$ increases ($I \\propto r^2$). To conserve $L$, $\\omega$ must decrease.\n\n<div style=\"text-align: center; margin: 30px 0;\">\n  <img src=\"https://python-code-aws.trinket.io/python-generated/3qovsz5t/angular_momentum.gif\" alt=\"Conservation of Angular Momentum Simulation\" style=\"max-width: 100%; border: 1px solid #ddd; border-radius: 4px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);\" />\n  <p style=\"font-size: 0.9em; color: #444; margin-top: 10px;\"><em>Figure 2: As an internal central force pulls the masses inward, the Moment of Inertia ($I$) drops, causing the angular velocity ($\\omega$) to increase drastically.</em></p>\n</div>"
  }
  ,

  {
    "slug": "simulating-lennard-jones-potential",

    "title": "Molecular Dynamics: Leonard-Jones potential",

    "excerpt": "An analysis of molecular interaction physics using a Python-based 1D particle chain governed by the Lennard-Jones potential.",

    "date": "2026-01-22",

    "readTime": "5 min read",

    "category": "Physics",

    "content": "### Fundamental Molecular Interactions\n\nMolecular dynamics simulations rely on governing equations to define how neutral atoms interact. The **Lennard-Jones (LJ) Potential** is the standard mathematical model used to approximate the potential energy between a pair of non-bonding particles as a function of their separation distance.\n\n### The Line Array Model\n\nImplementing a **Line Array** initialization serves as a controlled environment for observing fundamental physical properties. By constraining particles to a single dimension, it becomes possible to isolate and analyze specific phenomena such as **longitudinal phonons** (lattice vibrations) and **thermal expansion** without the stochastic interference present in 3D systems. This configuration transforms complex interatomic behavior into a measurable, linear system.\n\n### Theoretical Framework\n\nThe Lennard-Jones potential accounts for two primary forces:\n\n1.  **Pauli Repulsion ($1/r^{12}$):** At short ranges, the overlap of electron orbitals creates a steep repulsive barrier, preventing particle collapse.\n2.  **Van der Waals Attraction ($1/r^6$):** At moderate distances, induced dipole-dipole interactions create an attractive force that facilitates the formation of condensed phases.\n\nThe interaction is defined by the following equation:\n\n$$V(r) = 4\\epsilon \\left[ \\left( \\frac{\\sigma}{r} \\right)^{12} - \\left( \\frac{\\sigma}{r} \\right)^6 \\right]$$\n\n<div style=\"text-align: center; margin: 25px 0;\">\n  <img src=\"https://python-code-aws.trinket.io/python-generated/w71mico1/lennard_jones_simulation.gif\" alt=\"Lennard-Jones Line Array Simulation\" style=\"max-width: 100%; border-radius: 6px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);\" />\n  <p style=\"font-size: 0.85em; color: #555; margin-top: 10px;\"><em>Figure 1: Numerical simulation of a 1D atomic chain undergoing thermal oscillation within the LJ potential well.</em></p>\n</div>\n\n### Numerical Implementation\n\nThe simulation utilizes **Velocity Verlet Integration** to compute the trajectories of the particles. This method is preferred over standard Euler integration because it is a symplectic integrator, offering significantly better energy conservation over long-duration simulations. This stability is essential for observing the natural vibrational modes of the array.\n\nIn this implementation, particles are initially positioned at the equilibrium distance ($r \\approx 1.12\\sigma$), where the net force is zero. By introducing small velocity perturbations to simulate thermal energy, the array demonstrates how kinetic energy propagates through a medium at the microscopic scale."
  },
  {
    "slug": "bernoulli-equation-and-continuity",
    "title": "Fluid Dynamics: Bernoulli's Equation and the Continuity Principle",
    "excerpt": "An interactive 3D simulation for you to play around with!!",
    "date": "2026-03-01",
    "readTime": "5 min read",
    "category": "Physics",
    "content": "### The Physics of Moving Fluids\n\nWhen a fluid moves through a pipe, three quantities are always in conversation with one another: **pressure**, **velocity**, and **elevation**. Bernoulli's Equation formalises this relationship, asserting that for an ideal, incompressible fluid in steady flow, the total mechanical energy per unit volume remains constant along any streamline.\n\n### Bernoulli's Equation\n\nDerived from the conservation of energy, the equation takes the form:\n\n$$P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{constant}$$\n\nWhere $P$ is the static pressure, $\\rho$ is the fluid density, $v$ is the local flow velocity, $g$ is gravitational acceleration, and $h$ is the elevation above a reference point. The implication is striking: as a fluid accelerates into a narrower section of pipe, its kinetic energy increases and its pressure must fall proportionally to conserve the total.\n\n### The Equation of Continuity\n\nBefore Bernoulli's relation can be applied, the velocity at each cross-section must be determined. This is governed by the **Equation of Continuity**, which expresses the conservation of mass for an incompressible fluid:\n\n$$A_1 v_1 = A_2 v_2$$\n\nThe product of cross-sectional area and velocity remains constant along the pipe. Halving the pipe radius reduces its area by a factor of four, quadrupling the velocity at that section. It is this enforced acceleration that drives the pressure drop described by Bernoulli.\n\n### Interactive Simulation\n\nThe simulation below models steady-state flow through a pipe of variable geometry. (Simulation not made by me) Particle tracers move at velocities consistent with the continuity equation, visibly accelerating through the constriction. The right-hand panel updates the outlet velocity, pressure difference, and volumetric flow rate in real time.\n\n<div style=\"width: 100%; height: 600px; margin: 25px 0; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.15);\">\n  <iframe src=\"/bernoulli_simulation.html\" style=\"width: 100%; height: 100%; border: none;\" />\n</div>\n\n<p style=\"font-size: 0.85em; color: #555; text-align: center; margin-top: -15px;\"><em>Figure 1: Three-dimensional simulation of incompressible fluid flow. Adjust the pipe radii, height difference, and inlet velocity to observe how each parameter affects pressure and flow speed.</em></p>\n"
  }
  ,
  {
    "slug": "end-of-the-rainbow",
    "title": "End Of The Rainbow? Treasure?",
    "excerpt": "A rainbow is not a semicircle or a full circle; it is actually a cone. What you see is a circular section of that cone, with its vertex at your eye.",
    "date": "2026-03-27",
    "readTime": "4 min read",
    "category": "Physics",
    "content": "### Backstory behind this article:\n\nA while ago, when i was doomscrolling i saw this one post that claimed that the rainbow is a cone! I figured that it would be interesting to look into it.\n\nTo understand the physics behind this, picture that sunlight enters a spherical raindrop, refracts at the air-water interface, reflects off the back of the drop, and refracts again as it exits. Let $\\theta_i$ be the angle of incidence and $\\theta_r$ the refracted angle. By Snell's law,\n\n$$\\sin\\theta_i = n\\sin\\theta_r$$\n\nwhere $n = 4/3$ is the refractive index of water.\n\nAfter one internal reflection and a second refraction, the total deviation angle $D$ of the ray from its original direction is\n\n$$D = 2\\theta_i - 4\\theta_r + \\pi.$$\n\nThe rainbow appears where the deviation is stationary with respect to $\\theta_i$, i.e. where $\\frac{dD}{d\\theta_i} = 0$. From Snell's law, differentiating implicitly,\n\n$$\\cos\\theta_i = n\\cos\\theta_r \\cdot \\frac{d\\theta_r}{d\\theta_i} \\implies \\frac{d\\theta_r}{d\\theta_i} = \\frac{\\cos\\theta_i}{n\\cos\\theta_r}.$$\n\nSo, when $\\frac{dD}{d\\theta_i} = 0$,\n\n$$2 - 4\\frac{d\\theta_r}{d\\theta_i} = 0 \\implies \\frac{d\\theta_r}{d\\theta_i} = \\frac{1}{2} \\implies \\frac{\\cos\\theta_i}{n\\cos\\theta_r} = \\frac{1}{2} \\implies \\cos\\theta_i = \\frac{n}{2}\\cos\\theta_r.$$\n\nBy Snell's law, $\\sin\\theta_r = \\frac{\\sin\\theta_i}{n}$, so $\\cos\\theta_r = \\sqrt{1 - \\frac{\\sin^2\\theta_i}{n^2}}$. Substituting,\n\n$$\\cos^2\\theta_i = \\frac{n^2}{4}\\left(1 - \\frac{\\sin^2\\theta_i}{n^2}\\right) = \\frac{n^2}{4} - \\frac{\\sin^2\\theta_i}{4} = \\frac{n^2}{4} - \\frac{1 - \\cos^2\\theta_i}{4}$$\n\n$$4\\cos^2\\theta_i = n^2 - 1 + \\cos^2\\theta_i \\implies 3\\cos^2\\theta_i = n^2 - 1 \\implies \\cos^2\\theta_i = \\frac{n^2-1}{3}.$$\n\nFor $n = 4/3$,\n\n$$\\cos^2\\theta_i = \\frac{\\frac{16}{9}-1}{3} = \\frac{\\frac{7}{9}}{3} = \\frac{7}{27} \\implies \\cos\\theta_i = \\sqrt{\\frac{7}{27}} \\approx 0.509 \\implies \\theta_i \\approx 59.4^\\circ.$$\n\nThe corresponding refracted angle is\n\n$$\\theta_r = \\arcsin\\!\\left(\\frac{\\sin 59.4^\\circ}{4/3}\\right) = \\arcsin\\!\\left(\\frac{0.860}{1.333}\\right) \\approx 40.2^\\circ.$$\n\nThe viewing angle $\\psi$ between the incoming sunlight and the ray reaching the observer is\n\n$$\\psi = \\pi - D = \\pi - (2\\theta_i - 4\\theta_r + \\pi) = 4\\theta_r - 2\\theta_i = 4(40.2^\\circ) - 2(59.4^\\circ) = 160.8^\\circ - 118.8^\\circ = 42^\\circ.$$\n\nAll raindrops lying on a cone of half-angle $42^\\circ$ centred on the line from the sun through your eye send rainbow light to your eye. The rainbow is therefore a circular arc, the intersection of this cone with the rain!\n\n$$\\psi \\approx 42^\\circ$$\n\nSo, the treasure at the end of the rainbow was inside you all along. :ppp"
  },
  {
    slug: "simple-harmonic-damped-oscillators",
    title: "Simple Harmonic and Damped Oscillators",
    excerpt: "Why is ω = √(k/m)? Starting from F = −kx we solve the equation of motion using a complex exponential ansatz, derive the general SHM solution, then extend the analysis to overdamped, critically damped, and underdamped systems.",
    date: "2026-05-20",
    readTime: "12 min read",
    category: "Physics",
    content: `## Simple Harmonic Oscillator

Picture a block on a horizontal frictionless surface, attached to a spring. When we pull the block by a displacement $x$, it will have a **restoring force** acting on the spring. Note, that the restoring force is ALWAYS in the opposite direction as the displacement of the spring.

<figure style="margin:1.5rem 0;text-align:center"><img src="/images/shm-restoring-force.jpg" alt="Restoring force acting on the block" style="max-width:100%;border-radius:8px" /><figcaption style="margin-top:0.5rem;font-size:0.85rem;opacity:0.6">Restoring force acting on the block</figcaption></figure>

By common sense, if we pull a spring in one direction, it will tend to go back to its original shape, that is the **restoring force** in the opposite direction. So, the direction is **opposite**.

$$F = -kx$$

Newton's second law tells us that $\\Sigma F = ma$, and the acceleration is $\\frac{d^2x}{dt^2}$, or simply $\\ddot{x}$.

$$\\begin{aligned}
\\sum F_x &= m\\ddot{x}, \\\\
-kx &= m\\ddot{x}, \\\\
0 &= m\\ddot{x} + kx.
\\end{aligned}$$

This is the equation of motion we want to solve. Let's guess that the solution has the form $x = e^{rt}$ for some constant $r$, this is pretty common technique to solve a second order differential equation, by guessing the solution! Why can we guess that the solution is $x = e^{rt}$? Because:

$$\\frac{d}{dt}e^{rt} = re^{rt}, \\qquad \\frac{d^2}{dt^2}e^{rt} = r^2e^{rt}$$

We can get the original function back when we differentiate it and when we substitute it back, and we get a simple quadratic!

$$\\begin{aligned}
0 &= mr^2e^{rt} + ke^{rt}, \\quad e^{rt} \\neq 0 \\\\
0 &= mr^2 + k, \\\\
r^2 &= -\\frac{k}{m}, \\\\
r &= \\pm\\, i\\sqrt{\\frac{k}{m}}.
\\end{aligned}$$

Note, that $\\sqrt{-1} = i$ And here is where we get the familiar $\\sqrt{\\frac{k}{m}}$. A bunch of people decided that it would be cool to use $\\omega$ lol so then they let $\\omega = \\sqrt{k/m}$. But the reason for this is so that we dont have many alphabets flying around so the roots are $r_1 = i\\omega$ and $r_2 = -i\\omega$. And therefore the solution to $x(t)$ is

$$x(t) = C_1 e^{r_1 t} + C_2 e^{r_2 t} = C_1 e^{i\\omega t} + C_2 e^{-i\\omega t}$$

**Wtf just happened?** Ok dw its because of something called the **Superposition Principle**. For a n-th order ordinary differential equation, the solution is $x(t) = C_1 x_1(t) + C_2 x_2(t) + \\cdots + C_n x_n(t)$. But this is useless af because we only care about $n = 2$. So, using Euler's formula $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$:

$$\\begin{aligned}
x(t) &= C_1 e^{i\\omega t} + C_2 e^{-i\\omega t} \\\\
&= C_1\\bigl(\\cos(\\omega t) + i\\sin(\\omega t)\\bigr) + C_2\\bigl(\\cos(-\\omega t) + i\\sin(-\\omega t)\\bigr) \\\\
&= (C_1 + C_2)\\cos(\\omega t) + i(C_1 - C_2)\\sin(\\omega t) \\\\
&= A\\cos(\\omega t) + B\\sin(\\omega t),
\\end{aligned}$$

where $A = C_1 + C_2$ and $B = i(C_1 - C_2)$, just for convenience. Now I want to express this as a single cosine with a phase. Let $R\\cos(\\theta + \\alpha) = R\\cos\\theta\\cos\\alpha - R\\sin\\theta\\sin\\alpha \\equiv A\\cos(\\omega t) + B\\sin(\\omega t)$, where $\\theta = \\omega t$. Then we compare the coefficients,

$$\\begin{cases} R\\cos\\alpha = A, \\\\ -R\\sin\\alpha = B. \\end{cases}$$

$R^2\\cos^2\\alpha + R^2\\sin^2\\alpha = A^2 + B^2$, so $R = \\sqrt{A^2 + B^2}$. Dividing gives $\\tan\\alpha = -B/A$, so $\\alpha = \\tan^{-1}(-B/A)$. Therefore

$$A\\cos(\\omega t) + B\\sin(\\omega t) = \\sqrt{A^2+B^2}\\,\\cos\\!\\left(\\omega t + \\tan^{-1}\\!\\left(-\\frac{B}{A}\\right)\\right)$$

where the amplitude is $x_m = \\sqrt{A^2+B^2}$ and the phase difference is $\\varphi = \\tan^{-1}(-B/A)$.

$$\\boxed{x(t) = x_m\\cos(\\omega t + \\varphi), \\quad \\omega = \\sqrt{\\frac{k}{m}}}$$

<figure style="margin:1.5rem 0;text-align:center"><img src="/images/shm-circle.gif" alt="SHM as projection of uniform circular motion" style="max-width:100%;border-radius:8px" /><figcaption style="margin-top:0.5rem;font-size:0.85rem;opacity:0.6">SHM as the projection of uniform circular motion: as the dot rotates around the circle at angular frequency omega, its x-component traces out a cosine.</figcaption></figure>

### Mechanical Energy

$$E_{\\text{total}} = \\tfrac{1}{2}m\\dot{x}^2 + \\tfrac{1}{2}kx^2$$

At maximum displacement $x = x_m$, the block is momentarily at rest, so all the energy is ur potential energy:

$$\\boxed{E_{\\text{total}} = \\tfrac{1}{2}kx_m^2}$$

By common sense, this is the total energy at every instant.

## Damped Oscillators

Now we introduce some drag force, and we know that the drag force $\\propto v$. We picture the same scenario again, this time with a more better drawn box, but with air resistance **NOT NEGLIGIBLE**.

<figure style="margin:1.5rem 0;text-align:center"><img src="/images/damped-drag.jpg" alt="Drag force introduced" style="max-width:100%;border-radius:8px" /><figcaption style="margin-top:0.5rem;font-size:0.85rem;opacity:0.6">Drag force introduced :p</figcaption></figure>

So, by Newton's second law again,

$$\\begin{aligned}
\\sum F_x &= -kx - b\\dot{x}, \\\\
0 &= m\\ddot{x} + b\\dot{x} + kx.
\\end{aligned}$$

Again we guess $x = e^{rt}$ as the solution. Then $\\ddot{x} = r^2e^{rt}$ and $\\dot{x} = re^{rt}$, so

$$\\begin{aligned}
0 &= mr^2e^{rt} + bre^{rt} + ke^{rt}, \\quad e^{rt} \\neq 0 \\\\
0 &= mr^2 + br + k.
\\end{aligned}$$

Using the quadratic formula,

$$r = \\frac{-b \\pm \\sqrt{b^2 - 4mk}}{2m} = -\\frac{b}{2m} \\pm \\frac{\\sqrt{b^2 - 4mk}}{2m}$$

So $r_1 = -\\frac{b}{2m} + \\frac{\\sqrt{b^2-4mk}}{2m}$ and $r_2 = -\\frac{b}{2m} - \\frac{\\sqrt{b^2-4mk}}{2m}$. The discriminant $b^2 - 4mk$ gives us three scenarios.

### Scenario 1: Overdamping ($b^2 > 4mk$)

The discriminant is positive, so $r_1$ and $r_2$ are real. The solution to the differential equation is

$$x(t) = C_1 e^{r_1 t} + C_2 e^{r_2 t}$$

Just substitute $r_1$ and $r_2$ and we are done. No sines and cosines involved, because $r_1$ and $r_2$ are real (Euler's identity is not needed here).

### Scenario 2: Critical Damping ($b^2 = 4mk$)

The solution to the differential equation is $x(t) = C_1 e^{r_1 t} + C_2 e^{r_2 t}$ with $r_1 = r_2 = -b/(2m)$. Again, no sines and cosines are involved, as Euler's identity $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ requires an imaginary $i\\theta$ in the exponent.

### Scenario 3: Underdamping ($b^2 < 4mk$)

Now the discriminant is negative. We can rewrite

$$r_1 = -\\frac{b}{2m} + i\\frac{\\sqrt{4mk - b^2}}{2m}, \\qquad r_2 = -\\frac{b}{2m} - i\\frac{\\sqrt{4mk - b^2}}{2m}$$

Then

$$\\begin{aligned}
x(t) &= C_1 e^{\\left(-\\frac{b}{2m} + i\\frac{\\sqrt{4mk-b^2}}{2m}\\right)t} + C_2 e^{\\left(-\\frac{b}{2m} - i\\frac{\\sqrt{4mk-b^2}}{2m}\\right)t} \\\\
&= e^{-\\frac{b}{2m}t}\\left(C_1 e^{i\\frac{\\sqrt{4mk-b^2}}{2m}t} + C_2 e^{-i\\frac{\\sqrt{4mk-b^2}}{2m}t}\\right).
\\end{aligned}$$

Notice the terms in the bracket are in the form $A\\cos\\omega' t + B\\sin\\omega' t$. It almost looks the same as the one we did just now. Use Euler's identity $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$, and by letting $\\omega' = \\sqrt{4mk - b^2}/(2m)$, you can try to do the whole "Let $R\\cos(\\theta + \\alpha) = R\\cos\\theta\\cos\\alpha$" again urself and u will get the same thing:

$$\\begin{aligned}
&C_1\\bigl(\\cos\\omega' t + i\\sin\\omega' t\\bigr) + C_2\\bigl(\\cos\\omega' t - i\\sin\\omega' t\\bigr) \\\\
&\\quad = (C_1 + C_2)\\cos\\omega' t + (C_1 - C_2)i\\sin\\omega' t \\\\
&\\quad = x_m\\cos(\\omega' t + \\varphi),
\\end{aligned}$$

which we have already proven in the previous section on SHM. So the solution to the differential equation is

$$\\boxed{x(t) = e^{-\\frac{b}{2m}t}\\,x_m\\cos(\\omega' t + \\varphi), \\quad \\omega' = \\frac{\\sqrt{4mk - b^2}}{2m}}$$

<figure style="margin:1.5rem 0;text-align:center"><img src="/images/damped-circle.gif" alt="Underdamped motion" style="max-width:100%;border-radius:8px" /><figcaption style="margin-top:0.5rem;font-size:0.85rem;opacity:0.6">Underdamped motion: still cosine-like, but the amplitude decays as exp(-bt/2m). As the dot spirals inward on the left, the projection on the right oscillates within a shrinking window.</figcaption></figure>

### Mechanical Energy

For the underdamped case,

$$x = e^{-\\frac{b}{2m}t}\\cos(\\omega' t + \\varphi)$$

so the effective amplitude at time $t$ is

$$x_m(t) = e^{-\\frac{b}{2m}t}\\,x_m$$

where $-\\frac{b}{2m}$ is the damping factor in the exponent. Therefore

$$\\boxed{E_{\\text{total}} = \\tfrac{1}{2}k\\,e^{-\\frac{b}{m}t}\\,x_m^2}$$

The energy decays at twice the rate of the amplitude, which makes sense because $E \\propto x_m^2$ and squaring the exponential doubles the decay constant.`
  },
  {
    slug: "waves",
    title: "Waves",
    excerpt: "From the wave equation to the Doppler effect and double-slit interference — a derivation-first guide to waves.",
    date: "2026-05-27",
    readTime: "18 min read",
    category: "Physics",
    content: `## A Wave Function

For single oscillations, we are only keeping track of a single position that varies with time, that is $x(t)$. In the case of waves however, every single particle on the wave is oscillating. So each and every single particle has its own unique displacement from its equilibrium position (amplitude) at a given time, we call $\\psi(x, t)$. Now, we should first understand why there are 2 variables in $\\psi$. At every position, $x$, in a given time, $t$, every particle has its own unique amplitude, $\\psi$.

## The Wave Equation

Now that we know the relationship between time, position, and amplitude, we can begin to understand the motion of the wave. To find the motion of any object there is only one law we need: Newton's Second Law. I should note that I dislike the common formulation of $F = \\frac{dp}{dt}$, which is really the definition of impulsive force, not force in general. To me, force is generally given by mass times acceleration: $F = ma$ and idc what ur going to say lol

Anyways, so we begin by considering a string that is tied at both ends. With its mass per unit lenght given by $\\mu$. When we pluck the string at any point it will begin to oscillate. We focus on a part of the string with length $dx$.

It is important to note that the tension has equal magnitude $T_0$ at both ends because it acts on the same string, but acts along slightly different directions, making angles $\\theta$ and $\\theta + d\\theta$ with the horizontal. So, by F=ma,

$$T_0\\bigl[\\sin(\\theta + d\\theta) - \\sin\\theta\\bigr] = \\mu\\,dx\\,\\frac{\\partial^2\\psi}{\\partial t^2}$$

Now you might wonder why is the acceleration given by $\\frac{\\partial^2\\psi}{\\partial t^2}$, the reason is because $\\psi$ is your vertical displacement from the equilibrium position, and since the particle is oscillating up and down, its acceleration, or its second derivative with respect to time is $\\frac{\\partial^2\\psi}{\\partial t^2}$. Note that the weird sign that looks like a inverted 6 is actually the partial derivative. There are two variables in $\\psi(x, t)$ so we have to use the partial derivative to differentiate with respect to time $t$.

For small displacements, $\\sin\\theta \\approx \\theta \\approx \\tan\\theta = \\frac{\\partial\\psi}{\\partial x}$,

$$\\begin{aligned}
T_0\\bigl[\\sin(\\theta + d\\theta) - \\sin\\theta\\bigr] &\\approx T_0(\\theta + d\\theta - \\theta) = \\mu\\,dx\\,\\frac{\\partial^2\\psi}{\\partial t^2} \\\\\\\\
T_0\\,\\frac{d\\theta}{dx} &= \\mu\\,\\frac{\\partial^2\\psi}{\\partial t^2}
\\end{aligned}$$

And so we arrive at

$$\\frac{\\partial^2\\psi}{\\partial x^2} = \\frac{\\mu}{T_0}\\frac{\\partial^2\\psi}{\\partial t^2}$$

Something to note here is that the dimensions of $\\frac{\\mu}{T_0}$ is

$$\\frac{\\mu}{T_0} = \\frac{[\\text{kg/m}]}{[\\text{N}]} = \\frac{[\\text{kg}\\cdot\\text{m}^{-1}]}{[\\text{kg}\\cdot\\text{m}\\cdot\\text{s}^{-2}]} = [\\text{m}^{-2}\\cdot\\text{s}^2]$$

which can be the dimension of $\\frac{1}{v^2}$. And so $\\frac{\\partial^2\\psi}{\\partial x^2} = \\frac{1}{v^2}\\frac{\\partial^2\\psi}{\\partial t^2}$. What is $v$? how can i make such a claim that it is the speed of the wave?

## Solution to the wave equation

The solution to the wave equation is the wave function $\\psi(x, t) = A\\cos(kx - \\omega t)$. And this is something that i have to memorise without knowing how to derive it unfortunately for my level. I dont have the math to show how yet but we can verify that this is the solution by differentiating twice gives $\\frac{\\partial^2\\psi}{\\partial t^2} = -\\omega^2\\psi$ and $\\frac{\\partial^2\\psi}{\\partial x^2} = -k^2\\psi$, so the wave equation reduces to

$$\\omega^2 = \\frac{T_0}{\\mu}k^2 \\implies \\frac{\\omega}{k} = \\sqrt{\\frac{T_0}{\\mu}} \\equiv v$$

We rewrite the sinusoidal solution as $\\psi(x, t) = A\\cos(k(x - vt))$. The dependence on $x$ and $t$ enters only through the combination $x - vt$. This generalises: for any twice-differentiable $F$,

$$\\psi(x, t) = F(x - vt)$$

solves the wave equation. With $\\xi = x - vt$, the chain rule gives $\\frac{\\partial^2\\psi}{\\partial x^2} = F''(\\xi)$ and $\\frac{\\partial^2\\psi}{\\partial t^2} = v^2 F''(\\xi)$, and the two sides of the wave equation agree. Physically, $F(x - v\\,\\delta t)$ is the shape $F(x)$ shifted to the right by $v\\,\\delta t$. (That is called the horizontal translation you learnt in maths in the functions chapter). And so because the wave shifts a distance of $v\\delta t$ in a time $\\delta t$ we can finally say that $v$ is the speed of the wave.

## Deriving $v = f\\lambda$

Remember that the solution to the wave equation is the wave function $\\psi(x, t) = A\\cos(kx - \\omega t)$ at $t = 0$, $\\psi(x, 0) = A\\cos(kx)$. Now, the cosine function will repeat itself when $kx$ is $2\\pi$. And we define the distance travelled by the wavefront to be $\\lambda$. So then, $k\\lambda = 2\\pi$

$$k = \\frac{2\\pi}{\\lambda}$$

Again for a fixed position at $x = 0$, $\\psi(0, t) = A\\cos(\\omega t)$. For the cosine function to undergo a revolution, we define the period to be $T$. So, $\\omega T = 2\\pi$

$$\\omega = \\frac{2\\pi}{T} = 2\\pi f$$

By $\\omega = kv$,

$$v = f\\lambda$$

## Energy and power

The kinetic energy of a string segment of mass $dm = \\mu\\,dx$, where $\\mu$ is the mass per unit length. The velocity in the vertical direction of the wave particles is given by $\\frac{\\partial\\psi}{\\partial t} = -\\psi_m\\omega\\sin(kx - \\omega t)$. So, the kinetic energy waries with position and time as follows:

$$dK = \\frac{1}{2}\\mu\\,dx\\,\\psi_m^2\\omega^2\\sin^2(kx - \\omega t)$$

Now, the wave particles move at maximum velocity when it passes through the origin. Remember that

$$\\begin{aligned}
KE_{\\max} &= PE_{\\max} \\\\\\\\
\\frac{1}{2}mv_{\\max}^2 &= \\frac{1}{2}k_0\\psi_{\\max}^2 \\\\\\\\
v_{\\max} &= \\sqrt{\\frac{k}{m}}\\,\\psi_m = \\omega\\psi_m
\\end{aligned}$$

Where $\\psi_m$ is the maximum displacement from the equilibrium position. So, the total energy is

$$E = \\frac{1}{2}\\mu\\,dx\\,\\psi_m^2\\omega^2$$

So,

$$P = \\frac{1}{2}\\mu v\\psi_m^2\\omega^2$$

with $v$ being the speed of the travelling wave.

## The Doppler Effect

The wave speed in the medium is fixed and does not depend on the motion of source or observer. Doppler shifts arise from two distinct mechanisms: a moving source compresses or stretches the wavelengths it emits, and a moving observer encounters wavefronts at a relative speed different from $v$. Let $f$ be the emitted frequency, with its wavelength being $\\lambda$, $f'$ the observed frequency, with the observed wavelength being $\\lambda'$, $v_s$ the source speed (toward the observer), and $v_o$ the observer speed (toward the source). Now, pretend that there is nothing happening and the source is stationary.

### Scenario 1: Source moves towards or away from the observer

When the source is moving, the wavelength is being compressed or stretched. The source emits one wavefront per period $T = 1/f$. So the time difference between 2 successive waves is always $T$. In that time the source advances by $v_s T$ toward the observer, or $v_s T$ away from the observer. So the wavelengths in the medium ahead of the source are compressed to $\\lambda' = (v - v_s)T$, or $\\lambda' = (v + v_s)T$.

Keep in mind that $v = f\\lambda$ and the speed of the wave is medium-dependent and NOT dependent on the source. Hence the speed observed, $v'$ is just the speed of sound $v$,

$$\\frac{v'}{\\lambda'} = f'$$

$$f' = f \\cdot \\frac{v}{v \\mp v_s}$$

The intuition here is when the source is moving toward the observer, the frequency observed is larger because the denominator is $v - v_s$. And when the source moves away from the observer, the frequency observed is smaller.

### Scenario 2: Stationary source and moving observer

The speed observed, $v'$ in this case is different. The observed speed is now $v + v_o$, from the observers perspective he is running into the waves so he sees the waves coming to him at $v + v_o$. And since the source is not moving, the waves are not compressed so there is no change in observed wavelength $\\lambda'$.

$$\\frac{v'}{\\lambda'} = f'$$

$$f' = f\\frac{v + v_o}{v}$$

And again, if the observer can also move in the other direction so

$$f' = f\\frac{v \\pm v_o}{v}$$

### Scenario 3: Moving source and moving observer

This is just a combination of the 2 cases which we discussed. So the observed speed is $v' = v \\pm v_o$ and the observed wavelength is $\\lambda' = \\lambda \\mp v_s T$ and so

$$f' = f\\frac{v \\pm v_o}{v \\mp v_s}$$

## Superposition and beats

Recall that $\\psi(x, t) = A\\cos(kx - \\omega t)$. If we just want to a look at a fixed point, this makes the $kx$ term is fixed, which means that the cosine does not start from the origin. Assuming that the two waves are in-phase, we can drop the term $kx$ because the phase difference is constant, two waves of equal amplitude and nearby frequencies, $\\omega_1 \\approx \\omega_2$ arrive with:

$$\\psi_1 = A\\cos(\\omega_1 t), \\quad \\psi_2 = A\\cos(\\omega_2 t)$$

So

$$\\psi = \\psi_1 + \\psi_2 = 2A\\cos\\!\\left(\\frac{\\omega_1 - \\omega_2}{2}t\\right)\\cos\\!\\left(\\frac{\\omega_1 + \\omega_2}{2}t\\right)$$

If we dont drop the $kx$ term, it would look like

$$\\psi_1 = A\\cos(k_1 x - \\omega_1 t), \\quad \\psi_2 = A\\cos(k_2 x - \\omega_2 t)$$

$$\\psi = 2A\\cos\\!\\left(\\frac{k_1 - k_2}{2}x - \\frac{\\omega_1 - \\omega_2}{2}t\\right)\\cos\\!\\left(\\frac{k_1 + k_2}{2}x - \\frac{\\omega_1 + \\omega_2}{2}t\\right)$$

Which looks the same, because what matters to us is the coefficient of $t$, which determines the beats of a wave. So we choose to drop the $kx$ term.

For $\\omega_1 = \\omega_2$, this reduces to $2A\\cos(\\omega t)$, because the 2 cosine waves simply overlap and there is constructive interference, the amplitude of the wave is doubled. For $\\omega_1 \\approx \\omega_2$, the shape of the blue cosine wave will be oscillating like crazy because $\\omega_1 + \\omega_2$ is relatively much larger.

$$\\psi = 2A\\cos\\!\\left(\\frac{\\omega_1 - \\omega_2}{2}t\\right)\\cdot\\cos\\!\\left(\\frac{\\omega_1 + \\omega_2}{2}t\\right)$$

Now, we have to note that the sound we are hearing does not care wether or not the amplitude is negative or positive. Our ears cannot tell the difference between the negative and positive amplitude. So, the period between 2 sucessive loud sounds heard is just half the period originally, at every $t = 0, \\pi, 2\\pi...$. We can use our eyes and observe the graph and see that the shape of the resultant wave is determined by $\\cos\\!\\left(\\frac{\\omega_1 - \\omega_2}{2}t\\right)$, for which every period is now $\\pi$ instead of $2\\pi$. And so, the period is

$$T = \\frac{\\pi}{\\dfrac{\\omega_1 - \\omega_2}{2}} = \\frac{2\\pi}{\\omega_1 - \\omega_2}$$

Which gives

$$\\omega_b = \\omega_1 - \\omega_2$$

## Double-slit interference

Two coherent point sources separated by distance $d$ illuminate a screen at perpendicular distance $D$. Let $x$, $x'$ be the path lengths from the two sources to a point $P$ on the screen. The waves at $P$ are

$$\\psi_1 = A\\cos(kx - \\omega t), \\quad \\psi_2 = A\\cos(kx' - \\omega t)$$

Now at a fixed point, we call $P$, we only care about $t$ and the $kx$ term is the phase. So, the phase difference we call $\\Delta\\phi$

$$\\Delta\\phi = k(x' - x) = \\frac{2\\pi}{\\lambda}(x' - x)$$

The path difference and the phase difference is therefore related by:

$$\\Delta\\phi = k(x' - x) = \\frac{2\\pi}{\\lambda}(x' - x)$$

Now, we look back at point $P$, the superposition principle tells us that the resultant displacement $\\psi_{1+2}$ is the vector sum of each individual displacement of each waves $\\psi_1$ and $\\psi_2$. So,

$$\\begin{aligned}
\\psi_{1+2} &= A\\cos(kx - \\omega t) + A\\cos(kx' - \\omega t) \\\\\\\\
&= 2A\\cos\\!\\left(\\frac{k(x' - x)}{2}\\right)\\cos\\!\\left(\\frac{k(x + x')}{2} - \\omega t\\right)
\\end{aligned}$$

Remember that $k = \\frac{2\\pi}{\\lambda}$, so

$$\\psi_{1+2} = 2A\\cos\\!\\left(\\frac{\\pi(x' - x)}{\\lambda}\\right)\\cos\\!\\left(\\frac{\\pi(x + x')}{\\lambda} - \\omega t\\right)$$

When the path difference is $x' - x = \\lambda$,

$$\\psi_{1+2} = -2A\\cos\\!\\left(\\frac{\\pi(x + x')}{\\lambda} - \\omega t\\right)$$

The amplitude is $2A$, which is a maxima. When the path difference is $x' - x = \\frac{1}{2}\\lambda$,

$$2A\\cos\\!\\left(\\frac{\\pi \\cdot \\frac{1}{2}\\lambda}{\\lambda}\\right) = 2A\\cos\\!\\left(\\frac{\\pi}{2}\\right) = 0$$

so $\\psi_{1+2} = 0$. A minima is formed! So you can generalise yourself that for constructive interference to occur, the path difference is $n\\lambda$ $n = 0, 1, 2, 3...$ and for destructive interference to occur the path difference is $\\left(n + \\frac{1}{2}\\right)\\lambda$.

Let $d$ be distance of slit seperation,

$$d\\sin\\theta = x - x' = n\\lambda \\quad \\text{or} \\quad \\left(n + \\frac{1}{2}\\right)\\lambda$$

For $n = 0, 1, 2, ....$

For small angles, $\\sin\\theta \\approx \\tan\\theta = \\frac{D}{L}$, since $D$ is the distance from centra bright fringe to first order minima, $n = \\frac{1}{2}$.

$$\\frac{dD}{L} = \\frac{\\lambda}{2}$$

$$\\lambda = \\frac{2dD}{L}$$

and $2D$ is the distance between two successive dark fringe or bright fringe, ill call it $x$ and here,

$$\\lambda = \\frac{xd}{L}$$

where $d$ is the distance of the slit seperation and $L$ is the distance from the slit to the screen, $x$ is the distance between two successive bright or dark fringes.`
  }

]



export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug)
}

export function getAllPosts(): BlogPost[] {
  return posts
}
