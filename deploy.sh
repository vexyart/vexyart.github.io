#!/bin/bash
# Compilation and deployment pipeline for Vexy Lines Help Sites

# Resolve script directory and root directory of the repository
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "=== Step 1: Exporting flumproj source zip to Zensical and ProperDocs source folders ==="
cd "$ROOT_DIR" || exit 1
./flumproj2md --zip private/vexy-lines-20260528-1720.flumproj.zip --properdocs ./src_docs/prd/ --zensical ./src_docs/zen/

if [ $? -ne 0 ]; then
  echo "Error: flumproj2md conversion failed!"
  exit 1
fi

echo ""
echo "=== Step 2: Compiling Zensical help portal ==="
cd "$ROOT_DIR/src_docs/zen" || exit 1
zensical build --clean

if [ $? -ne 0 ]; then
  echo "Error: Zensical compilation failed!"
  exit 1
fi

echo "Deploying Zensical site to docs/lines-zen/..."
rm -rf "$ROOT_DIR/docs/lines-zen"
mv site "$ROOT_DIR/docs/lines-zen"

echo ""
echo "=== Step 3: Compiling ProperDocs+MaterialX help portal ==="
cd "$ROOT_DIR/src_docs/prd" || exit 1
properdocs build --clean

if [ $? -ne 0 ]; then
  echo "Error: ProperDocs compilation failed!"
  exit 1
fi

echo "Deploying ProperDocs site to docs/lines-prd/..."
rm -rf "$ROOT_DIR/docs/lines-prd"
mv site "$ROOT_DIR/docs/lines-prd"

echo ""
echo "=== Deployment Pipeline completed successfully! ==="
echo "Zensical site is available at: ./docs/lines-zen/"
echo "ProperDocs site is available at: ./docs/lines-prd/"
